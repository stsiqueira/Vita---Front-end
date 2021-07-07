
const HealthConcerns = ({wrapperClassname, optionName, imgClassName, imageUrl, altText, callback}) => {
    return (
        <div className="checkbox-wrapper">
             <div className={wrapperClassname}>
                 <img className={imgClassName} src={imageUrl} alt={altText} />
                <input type="checkbox" id={optionName} name={optionName} value={optionName} onChange={callback}/>
            </div>
            <div className="label-wrapper">
                <label htmlFor={optionName}> {optionName}</label>
            </div>
        </div>
    )
}

export default HealthConcerns