import cls from "./styles.module.css"
// import { useState } from "react"
console.log(cls)
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