
const Select = (props) => {
    return (
        <select 
            name={props.name} 
            id={props.name}
            value={props.value}
            onChange={e => props.setvalue(e.target.value)}
            aria-describedby={`description-${props.name}`}
            required
        >
            {props.options.map((option) => (
                <option key={option.value} disabled={props.disable} value={option.value}>{option.text}</option>
            ))}
        </select>
    )
}

Select.defaultProps = {
    name: "select",
    value: "select",
    options: []
}

export default Select;