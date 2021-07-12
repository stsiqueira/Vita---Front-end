import { useState } from 'react/cjs/react.development';
import { healthTestData, healthData } from '../../data/data.json';

const HealthConcerns = ({wrapperClassname, optionName, imgClassName, imageUrl, altText, callback}) => {
    console.log(healthTestData)
    console.log(healthData)
    const [data , setData] = useState(healthTestData)
    console.log(data)
    const healtharr = healthData.map(element => element.replace(" ","").toLowerCase())
    
    const handleSubmit = (e) => {
        e.preventDefault()
        callback(data)
    }

    const changed = (target, value) => {
        console.log("hi")
        // const items = {...data}
        // items[target] = value
        // setData(prevState => ({
        //     ...prevState,
        //     [target]: value
        // }));
    }

    return (
        <form onSubmit={e => { handleSubmit(e)}}>
            {healtharr.map(element => (
                <div key={element} className="checkbox-wrapper">
                    <div className={wrapperClassname}>
                        <img className={imgClassName} src={imageUrl} alt={altText} />
                        <input 
                            type="checkbox" 
                            id={element} 
                            name={element} 
                            value={false} 
                            onChange={(e) => changed(e.target.id, e.target.checked)}
                        />
                    </div>
                    <div className="label-wrapper">
                        <label htmlFor={element}> {element}</label>
                    </div>
                </div>
            ))}
            <input type="submit" value="Submit" />
        </form>
    )
}

export default HealthConcerns