import { useState } from 'react';
import Labels from './compositableComponents/label';
import Select from './compositableComponents/select';
import { fstatusData as fdata, activityData } from '../data/data.json';

const NutrientForm = () => {
    const [gender, setGender] = useState("MALE");
    const [age, setAge] = useState(0);
    const [fstatus, setFstatus] = useState("");
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [activity, setActivity] = useState("");

    const handleSubmit= (e) => {
        e.preventDefault();
        let my_obj = {
            "MEAS_UNITS": "STANDARD",
            "SEX": gender,
            "AGE": age,
            "AGE_TYPE": "YRS",
            "HEIGHT_FEET": height,
            "WEIGHT": 150,
            "ACTIVITY": activity,
            "F_STATUS": fstatus,
            "submit": "",
        }
        console.log(my_obj)
    }
  
    return (
        <div>
            <div className="heading">
                <h1>Nutrient Calculator</h1>
                <p className="">
                    Answer the questions to get your personalized
                    vitamins and minerals daily intake suggestions!
                </p>
            </div>

            <form onSubmit={e => { handleSubmit(e) }}>
                <div>
                    <Labels for="gender" text="What is your Gender?"/>
                    <Select 
                        name="gender" 
                        value={gender}
                        setvalue={setGender} 
                        options={activityData}
                    />
                </div>

                { gender !== "MALE" ? (
                    <div>
                        <Labels for="F_STATUS" text="What is your Gender?"/>
                        <Select 
                            name="F_STATUS" 
                            value={fstatus} 
                            setvalue={setFstatus} 
                            options={fdata} 
                        />
                        
                    </div>) : <></>
                }

                <div>
                    <Labels for="age" text="What is your Age?"/>
                    <input 
                        name='age' 
                        type='number'
                        min="10"
                        max="100"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <Labels for="weight" text="How much do you weight?"/>
                    <input 
                        name='weight' 
                        type='number' 
                        min="10"
                        max="400"
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <Labels for="height" text="What's your height"/>
                    <input 
                        name='height' 
                        type='number' 
                        min="10"
                        max="270"
                        value={height}
                        onChange={e => setHeight(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <Labels for="ACTIVITY" text="How active are you?"/>
                    <Select 
                        name="ACTIVITY" 
                        value={activity}
                        setvalue={setActivity} 
                        options={activityData}
                    />
                </div>
                <div>
                    <input 
                        type='submit' 
                        value='Calculate' 
                    />
                </div>
        </form>
      </div>
    )
}

export default NutrientForm;
