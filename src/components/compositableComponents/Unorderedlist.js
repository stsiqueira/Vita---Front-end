
const UnorderedList = ({ heading, name, classname, arr }) => {

    return (
        <div className={classname}>
            <h3>
                {heading}
            </h3>
            <ul 
                name={name} 
                id={name}
            >
                {arr.map((option) => (
                    <li key={option.name}>{option.name} {option.recommended_intake}</li>
                ))}
            </ul>
        </div>
    )
}

UnorderedList.defaultProps = {
    heading: "unorderedlist",
    className: "unorderedlist",
    name: "unorderedlist",
    arr: []    
}

export default UnorderedList;