import { useState } from 'react';
import { healthTestData, healthData, concerns } from '../../data/data.json';
import fatigue from "../../img/health_concerns/fatigue.svg"
import hairloss from "../../img/health_concerns/hair_loss.svg"
import insomnia from "../../img/health_concerns/insomnia.svg"
import skin_problems from "../../img/health_concerns/skin_problems.svg"


const HealthConcerns = ({wrapperClassname, imgClassName, imageUrl, altText, callback}) => {
    const healthImage = {
        "fatigue": fatigue,
        "hairloss": hairloss,
        "insomnia": insomnia,
        "skinproblems": skin_problems,
    }
    const [data , setData] = useState(healthTestData)
    const healtharr = healthData.map(element => element.replace(" ","").toLowerCase())

    const handleSubmit = (e) => {
        e.preventDefault();
        callback(data);
    }

    const changed = (target, value) => {
        const items = {...data};
        items[target] = value;
        setData(prevState => ({
            ...prevState,
            [target]: value
        }));
    }

    const imageClick = (e) => {
        let inputElement = document.getElementById(e.target.nextElementSibling.id)
        inputElement.checked = inputElement.checked ? false : true
        changed(inputElement.id, inputElement.checked)
    }


    return (
        <form onSubmit={e => { handleSubmit(e)}}>
            {healtharr.map(element => (
                <div key={element} className="checkbox-wrapper">
                    <div className={wrapperClassname}>
                        <img className={imgClassName} src={healthImage[element]} onClick={(e) => imageClick(e)} alt={altText} />
                        <input 
                            type="checkbox" 
                            id={element} 
                            name={element} 
                            value={false} 
                            onChange={(e) => changed(e.target.id, e.target.checked)}
                        />
                    </div>
                    <div className="label-wrapper">
                        <label id={element} htmlFor={element}> {concerns[element]}</label>
                    </div>
                </div>
            ))}
            <div className="test">
                <input type="submit" value="Update Results" />
            </div>
        </form>
    )
}

export default HealthConcerns;