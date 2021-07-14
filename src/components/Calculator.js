import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Labels from './compositableComponents/Label';
import Select from './compositableComponents/Select';
import { fstatusData as fdata, activityData, genderData, activityLevel } from '../data/data.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './compositableComponents/Button';

const NutrientForm = () => {
    const history = useHistory()
    const [ metric, setMetric ] = useState("metric")
    const [ gender, setGender ] = useState("MALE");
    const [ age, setAge ] = useState(metric === "standard" ? 6 : 11);
    const [ fstatus, setFstatus ] = useState("");
    const [ weight, setWeight ] = useState(0);
    const [ heightfeet, setHeightfeet ] = useState(0);
    const [ heightinches, setHeightinches ] = useState(0);
    const [ activity, setActivity ] = useState("");

    const condition = (metric, gender, age, heightfeet, heightinches, activity) => {
        let flag = true
        if(!["STANDARD", "METRIC"].includes(metric.toUpperCase())) {
            flag = false
        }

        if(!["MALE", "FEMALE"].includes(gender)) {
            flag = false
        }

        if(age < 10 || age > 100) {
            console.log("age");
            flag = false
        }
        
        if (metric === "metric") {
            if (heightfeet <= 0 || heightfeet > 220) {
                flag = false
            }

            if(weight <= 20 || weight > 130) {
                flag = false
            }
        }

        if (metric === "standard") {
            if (heightfeet <= 0 || heightfeet > 6) {
                flag = false
            }

            if (heightinches <= 0 || heightinches > 11) {
                flag = false
            }

            if(weight <= 40 || weight > 260) {
                flag = false
            }
        }

        if((age > 13 || age < 50) && (gender === "FEMALE")) {
            if(!["pregnant1st", "pregnant2nd_1", "pregnant2nd_2", "pregnant3rd", "lactating1st", "lactating2nd"].includes(activity)) {
                flag = false
            }
        }

        if(!["Sedentary", "Low Active", "Active", "Very Active"].includes(activity)) {
            flag=false
            console.log("activity");
        }

        return flag
    }

    const handleSubmit= async (e) => {
        e.preventDefault();

        const vitaminList = ["Vitamin A", "Vitamin B6", "Niacin", "Pantothenic Acid", "Vitamin C", "Vitamin K", "Vitamin E"]
        const mineralList = ["Calcium", "Copper", "Iron", "Magnesium", "Phosphorus", "Potassium", "Zinc"]

        if (!condition(metric, gender, age, heightfeet, heightinches, activity)) {
            toast.warn('Please Check your inputs', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return false
        }
            
        const my_obj = {
            "MEAS_UNITS": metric.toUpperCase(),
            "SEX": gender,
            "AGE": age,
            "AGE_TYPE": "YRS",
            "WEIGHT": weight,
            "ACTIVITY": activity,
            "F_STATUS": fstatus,
            "submit": "",
        }

        if(metric === "standard") {
            my_obj["HEIGHT_FEET"] = heightfeet
            my_obj["HEIGHT_INCHES"] =  heightinches
        } else {
            my_obj["HEIGHT_CM"] = heightfeet
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

    const classToggle = (button) => {
        button.className.includes("clicked") ? button.classList.remove('clicked') : button.classList.add("clicked");
    }

    const metricToggle = (value, e) => {
        const metric = document.getElementById("metric");
        const standard = document.getElementById("standard");
        classToggle(metric)
        classToggle(standard)
        setMetric(value)
    }
  
    return (
        <div className="nutrient-calculator-wrapper">
            <div className="child-wrapper">
                <div className="heading">
                    <h2>Nutrient Calculator</h2>
                    <p className="">
                        Answer the questions to get your personalized
                        vitamins and minerals daily intake suggestions!
                    </p>
                </div>

                <div className="nutrient-calculator-form-wrapper">

                    <div className="metric-wrapper">
                        {
                            ["metric", "standard"].map(metric => (
                                <Button
                                    key={metric}
                                    id={metric}
                                    classname={`unit-button ${metric} ${metric === "metric" ? "clicked" : ""}`}
                                    text={metric.charAt(0).toUpperCase() + metric.slice(1)}
                                    callback={metricToggle}
                                    args={metric}
                                />
                            ))
                        }
                    </div>

                    <form className="nutrient-calculator-form-wrapper" onSubmit={e => { handleSubmit(e) }}>

                        <div className="nutrient-calculator-input-wrapper">
                            <Labels for="age" text="What is your age?"/>
                            <div className="input-unit-wrapper">
                                <input
                                    className="input-age" 
                                    name='age' 
                                    type='number'
                                    min="10"
                                    max="100"
                                    value={age}
                                    onChange={e => setAge(e.target.value)}
                                    required
                                />
                                <span>years</span>
                            </div>
                        </div>

                        <div className="nutrient-calculator-input-wrapper">
                            <Labels for="weight" text="How much do you weight?"/>
                            <div className="input-unit-wrapper">
                                <input
                                    className="input-weight" 
                                    name='weight' 
                                    type='number' 
                                    min={metric === "standard" ? "40" : "20"}
                                    max={metric === "standard" ? "260" : "130"}
                                    value={weight}
                                    onChange={e => setWeight(e.target.value)}
                                    required
                                />
                                
                                <span>{metric === "standard" ? "pounds" : "kilograms"}</span>
                            </div>
                        </div>

                        <div className="nutrient-calculator-height-wrapper" id="height-standard">
                            <p>What is your height?</p>
                            <div className="height-input-wrapper ">
                                {
                                    metric === "standard" ?
                                    <>
                                    <input
                                        className="input-height-feet" 
                                        name='HEIGHT_FEET' 
                                        type='number' 
                                        min="0"
                                        max="6"
                                        value={heightfeet}
                                        onChange={e => setHeightfeet(e.target.value)}
                                        required
                                    />
                                    <Labels for="HEIGHT_FEET" text="feet"/>
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
                                    <Labels for="HEIGHT_INCHES" text="inches"/> 
                                    </>:
                                    <>
                                        <input
                                            className="input-height-feet" 
                                            name='height-centimeters' 
                                            type='number' 
                                            min="0"
                                            max="220"
                                            value={heightfeet}
                                            onChange={e => setHeightfeet(e.target.value)}
                                            required
                                        />
                                        <Labels for="height-centimeters" text="centimeters"/>
                                    </>
                                }
                            </div>
                        </div>

                        <div className="nutrient-calculator-select-wrapper">
                            <Labels for="gender" text="What is your gender?"/>
                            <div className="gender-options-wrapper">
                                {
                                    genderData.map((gender) => ( 
                                        <span key={gender.text} className="gender-options">
                                            <input 
                                                type="radio" 
                                                id={gender.text} name="gender" 
                                                className={`gender ${gender.text.toLowerCase()}`} 
                                                value={gender.text} onChange={e => setGender(e.target.value)}
                                            />
                             
                                            <Labels for="gender" text={gender.text.charAt(0).toUpperCase()}/>
                                        </span>
                                    ))
                                }
                            </div>
                        </div>

                        
                        <div className="nutrient-calculator-input-wrapper preg-lact-wrapper">
                            <Labels for="F_STATUS" text=" Pregnant or Lactating?" classname={gender === "MALE" ? "disable" : age > 13 && age < 50? null : "disable"}/>

                            <div className="select-wrapper">
                                <Select 
                                    name="F_STATUS" 
                                    value={fstatus} 
                                    setvalue={setFstatus} 
                                    options={fdata}
                                    disable={gender === "MALE" ? "disabled" : age > 13 && age < 50? null : "disabled"}
                                    require={gender === "MALE" ? "disabled" : age > 13 && age < 50? null : "disabled"}
                                />
                            </div>
                            
                        </div>

                        <div className="nutrient-calculator-activity-wrapper">
                            <Labels for="ACTIVITY" text="How active are you?"/>
                            <div className="select-wrapper">
                                <Select 
                                    name="ACTIVITY" 
                                    value={activity}
                                    setvalue={setActivity} 
                                    options={activityData}
                                />
                            </div>
                            
                        </div>
                        <div className="activity-level-wrapper">
                            {activityLevel[activity]}  
                        </div>
                        <div className="confidential-wrapper">
                            <p>
                                This is a confidential information and is not shared or stored in the database and will be removed when the page refreshes.
                            </p>  
                        </div>
                        <div className="nutrient-calculator-input-wrapper">
                            <input
                                className="input-submit" 
                                type='submit' 
                                value='Calculate' 
                            />
                        </div>
                    </form>
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        limit={1}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </div>
      </div>
    )
}

export default NutrientForm;
