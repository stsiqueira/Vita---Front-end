
const Labels = (props) => {
    return (
        <label htmlFor={props.for} className={props.classname}>{props.text}</label>
    )
}

export default Labels;
