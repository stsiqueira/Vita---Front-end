import React from 'react';
import { useState } from 'react';

const NutrientForm = () => {
    const [gender, setGender] = useState("MALE");
    const [age, setAge] = useState();
    const [fstatus, setFstatus] = useState("none");
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [activity, setActivity] = useState();

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
                    <label for="gender">What is your Gender?</label>
                    <select 
                        name="gender" 
                        id="gender"
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                        required
                    >
                            <option value="MALE" selected>Male</option>
                            <option value="FEMALE">Female</option>
                    </select>
                </div>
                <div>
                    <label>What is your Age?</label>
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
                { gender !== "MALE" ? (
                    <div>
                        <label for="F_STATUS">Pregnant or Lactating?</label>
                        <select 
                            name="F_STATUS" 
                            id="F_STATUS" 
                            value={fstatus}
                            onChange={e => setFstatus(e.target.value)}
                            required
                        >
                                <option value="">- Select -</option>
                                <option value="none">Not Pregnant or Lactating</option>
                                <option value="pregnant1st">Pregnant - 1st Trimester</option>
                                <option value="pregnant2nd_1">Pregnant - 2nd Trimester (Less than 20 Weeks)</option>
                                <option value="pregnant2nd_2">Pregnant - 2nd Trimester (More than 20 Weeks)</option>
                                <option value="pregnant3rd">Pregnant - 3rd Trimester</option>
                                <option value="lactating1st">Lactating - 0-6 months</option>
                                <option value="lactating2nd">Lactating - Over 7 months</option>
                        </select>
                    </div>) : ""
                }
                <div>
                    <label>How much do you weight?</label>
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
                    <label>How much do you height?</label>
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
                    <label>How active are you?</label>
                    <select 
                    name="ACTIVITY" 
                    id="ACTIVITY" 
                    value={activity}
                    onChange={e => setActivity(e.target.value)}
                    aria-describedby="description-activity"
                    required>
                        <option value="">- Select -</option>
                        <option value="Sedentary">Sedentary</option>
                        <option value="Low Active">Low Active</option>
                        <option value="Active">Active</option>
                        <option value="Very Active">Very Active</option>
                    </select>
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
