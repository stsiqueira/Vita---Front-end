import Button from "../compositableComponents/Button"
import { useHistory } from "react-router-dom";


const Recalculate = ({parentClassname, descriptionClassname, descriptionText,buttonWrapperClassname, buttonClassname, buttonText, callback, args}) => {

    const history = useHistory()
    const buttonClick = () => {
        history.push({
            pathname: '/NutrientCalculator/Start',
        })
    }
    return (
        <div className={`recalculate-wrapper ${parentClassname}`}>
            <div className="image-text-wrapper">
                <img src="/img/icons/nutrient_calculator_icon.svg" alt="Nutrient Calculator" />
                <p className={descriptionClassname}>
                    {descriptionText}
                </p>
            </div>
            <div className={`button-wrapper ${buttonWrapperClassname}`}>
                <Button text={buttonText} classname={`${buttonClassname} btn`} callback={buttonClick} />
            </div>
        </div>
    )
}

export default Recalculate;