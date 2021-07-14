import Button from "../compositableComponents/Button"

const Recalculate = ({parentClassname, descriptionClassname, descriptionText,buttonWrapperClassname, buttonClassname, buttonText, callback, args}) => {
    return (
        <div className={`recalculate-wrapper ${parentClassname}`}>
            <div className="image-text-wrapper">
                <img src="/img/icons/nutrient_calculator_icon.svg" alt="Nutrient Calculator" />
                <p className={descriptionClassname}>
                    {descriptionText}
                </p>
            </div>
            <div className={`button-wrapper ${buttonWrapperClassname}`}>
                <Button text={buttonText} classname={`${buttonClassname} btn`} callback={callback} />
            </div>
        </div>
    )
}

export default Recalculate;