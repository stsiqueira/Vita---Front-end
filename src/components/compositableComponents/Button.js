const Button = ({text, classname, id, callback, args}) => {
    return (
        <button className={classname} id={id} onClick={(e) => callback(args, e)}>
            {text}
        </button>
    )
}

export default Button