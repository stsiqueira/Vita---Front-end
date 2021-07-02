const Button = ({text, classname, callback, args}) => {
    return (
        <button className={classname} onClick={(e) => callback(args)}>
            {text}
        </button>
    )
}

export default Button