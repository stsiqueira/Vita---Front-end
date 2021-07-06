
const UnorderedList = ({ heading, name, classname, arr, flag }) => {

    return (
        <div className={classname}>
            <h3>
                {heading}
            </h3>
            <ul 
                name={name} 
                id={name}
            >
                {flag ? 
                    arr.map((option) => (
                        <li key={option.name} className="nutrient-color-link-wrapper">
                            <div className="nutrient-name-color-wrapper">   
                                <svg>
                                    <rect width="1rem" height="1rem"/>
                                </svg>
                                <span className="nutrient-name">{option.name}</span>
                            </div>
                            <div className="nutrient-name-color-wrapper">
                                <span className="nutrient-name">{option.recommended_intake}</span>
                            </div>
                             
                        </li>
                    )):
                    arr.map((option) => (
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