import Button from "../compositableComponents/Button"
import NutrientCalculatorImg from "../../img/icons/nutrient_calculator_icon.svg"

const Recalculate = ({parentClassname, descriptionClassname, descriptionText,buttonWrapperClassname, buttonClassname, buttonText, callback, args}) => {
    return (
        <div className={`recalculate-wrapper ${parentClassname}`}>
            <div className="image-text-wrapper">
                <img src={NutrientCalculatorImg} alt="Nutrient Calculator" />
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