import cls from "./styles.module.css"
function Search({onChange, type, placeholder, name, className=cls.input__search}){
    return(
        <input
            onChange={onChange}
            type={type} 
            placeholder={placeholder}
            name={name}
            className={className}
        />
    )
}
export default Search