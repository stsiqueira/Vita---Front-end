import Button from "../compositableComponents/Button"

const Recalculate = ({parentClassname, descriptionClassname, descriptionText,buttonWrapperClassname, buttonClassname, buttonText, callback, args}) => {
    return (
        <div className={`recalculate-wrapper ${parentClassname}`}>
            <div className="image-text-wrapper">
                <img src="https://picsum.photos/200" alt="right wing" />
                <p className={descriptionClassname}>
                    {descriptionText}
                </p>
            </div>
            <div className={`button-wrapper ${buttonWrapperClassname}`}>
                <Button text={buttonText} classname={buttonClassname} callback={callback} />
            </div>
        </div>
    )
}

export default Recalculate