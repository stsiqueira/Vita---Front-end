import {Link} from 'react-router-dom'

const UnorderedList = ({ headflag, heading, name, classname, borderclassname, rectclassname, arr, flag, callback }) => {
    return (
        <div className={classname}>
            {headflag ? 
                 <></>:
                <h3>
                    {heading}
                </h3>
            }
            <ul 
                name={name} 
                id={name}
            >
                {flag ? 
                    arr.map((option) => (
                        <li key={option.name} >
                            <Link 
                                to=""
                                onClick={(e) => {
                                    e.preventDefault()
                                    let type = option.name.toLowerCase().includes("vitamin") ? "Vitamins" : "Minerals"
                                    callback(type, option.name)
                                }} 
                                className={`nutrient-color-link-wrapper ${borderclassname ? `vitamin${option.sort}border` : `mineral${option.sort}border`}`}>
                                <div className="nutrient-name-color-wrapper"
                            >   
                                <svg>
                                    <rect 
                                    className={rectclassname ? `vitamin${option.sort}` : `mineral${option.sort}`} 
                                    width="1.8rem" 
                                    height="1.8rem"
                                />
                                </svg>
                                <span className="nutrient-name">{option.name.toLowerCase().includes("vitamin") ? option.name : `${option.label} - ${option.name}`}</span>
                            </div>
                            <div className="nutrient-name-color-wrapper">
                                <span className="nutrient-name">{option.recommended_intake}</span>
                            </div>
                            </Link>

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