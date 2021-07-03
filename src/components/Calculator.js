import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Labels from './compositableComponents/Label';
import Select from './compositableComponents/Select';
import { fstatusData as fdata, activityData, genderData } from '../data/data.json';

const NutrientForm = () => {
    const history = useHistory()
    // const [ metric, setMetric ] = useState(true)
    const [ gender, setGender ] = useState("MALE");
    const [ age, setAge ] = useState(5);
    const [ fstatus, setFstatus ] = useState("");
    const [ weight, setWeight ] = useState(0);
    const [ heightfeet, setHeightfeet ] = useState(0);
    const [ heightinches, setHeightinches ] = useState(0);
    const [ activity, setActivity ] = useState("");


    const handleSubmit= async (e) => {
        e.preventDefault();
        const vitaminList = ["Vitamin A", "Vitamin C", "Vitamin B6", "Vitamin E", "Vitamin K"]
        const mineralList = ["Calcium", "Copper", "Iron", "Magnesium", "Phosphorus", "Zinc"]
        const my_obj = {
            "MEAS_UNITS": "STANDARD",
            "SEX": gender,
            "AGE": age,
            "AGE_TYPE": "YRS",
            "HEIGHT_FEET": heightfeet,
            "HEIGHT_INCHES": heightinches,
            "WEIGHT": 150,
            "ACTIVITY": activity,
            "F_STATUS": fstatus,
            "submit": "",
        }
        const res = await fetch("http://ec2-3-131-97-46.us-east-2.compute.amazonaws.com/calculate/", {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(my_obj)
		})

		const data = await res.json()
        if (data) {
            const vitaminArr = data.vitamin.filter(vitamins => vitaminList.includes(vitamins.name))
            const mineralArr = data.minerals.filter(minerals => mineralList.includes(minerals.name))
            history.push({
                pathname: '/NutrientCalculator/Results',
                state: { 
                        vitamin: vitaminArr,
                        mineral: mineralArr
                    }
            })
        }
    }
  
    return (
        <div className="nutrient-calculator-wrapper">
            <div className="child-wrapper">
                <div className="heading">
                    <h1>Nutrient Calculator</h1>
                    <p className="">
                        Answer the questions to get your personalized
                        vitamins and minerals daily intake suggestions..
                    </p>
                </div>

                <form className="nutrient-calculator-form-wrapper" onSubmit={e => { handleSubmit(e) }}>

                    <div className="nutrient-calculator-select-wrapper">
                        <Labels for="gender" text="What is your Gender?"/>
                        <Select 
                            name="gender" 
                            value={gender}
                            setvalue={setGender} 
                            options={genderData}
                        />
                    </div>

                    { gender !== "MALE" ? (
                        <div className="nutrient-calculator-input-wrapper">
                            <Labels for="F_STATUS" text="Lactating or pregnant?"/>
                            <Select 
                                name="F_STATUS" 
                                value={fstatus} 
                                setvalue={setFstatus} 
                                options={fdata} 
                            />
                            
                        </div>) : <></>
                    }

                    <div className="nutrient-calculator-input-wrapper">
                        <Labels for="age" text="What is your Age?"/>
                        <input
                            className="input-age" 
                            name='age' 
                            type='number'
                            min="5"
                            max="100"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            required
                        />
                    </div>

                    <div className="nutrient-calculator-input-wrapper">
                        <Labels for="weight" text="How much do you weight? (pounds)"/>
                        <input
                            className="input-weight" 
                            name='weight' 
                            type='number' 
                            min="10"
                            max="400"
                            value={weight}
                            onChange={e => setWeight(e.target.value)}
                            required
                        />
                    </div>

                    <div className="nutrient-calculator-height-wrapper" id="height-standard">
                        <p>What's your height (feet)?</p>
                        <div className="height-input-wrapper">
                            <Labels for="HEIGHT_FEET" text="feet:"/>
                            <input
                                className="input-height-feet" 
                                name='HEIGHT_FEET' 
                                type='number' 
                                min="0"
                                max="8"
                                value={heightfeet}
                                onChange={e => setHeightfeet(e.target.value)}
                                required
                            />
                            <Labels for="HEIGHT_INCHES" text="inches:"/>
                            <input
                                className="input-height-inches" 
                                name='HEIGHT_INCHES' 
                                type='number' 
                                min="0"
                                max="11"
                                value={heightinches}
                                onChange={e => setHeightinches(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="nutrient-calculator-activity-wrapper">
                        <Labels for="ACTIVITY" text="How active are you?"/>
                        <Select 
                            name="ACTIVITY" 
                            value={activity}
                            setvalue={setActivity} 
                            options={activityData}
                        />
                    </div>
                    <div className="nutrient-calculator-input-wrapper">
                        <input
                            className="input-submit" 
                            type='submit' 
                            value='Calculate' 
                        />
                    </div>
                </form>
            </div>
      </div>
    )
}

export default NutrientForm;
