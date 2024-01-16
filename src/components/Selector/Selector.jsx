import cls from "./style.module.css"
function Selector({options=[], onChange}){
    return(
        <select className={cls.form__selector} name="select" id="select">
            {
                options.map((option, index)=>{
                    return(<option 
                    key={index}
                    onChange={onChange}
                    value={option.value} 
                    selected={option.selected}
                    disabled={option.disabled}
                    >
                        {option.label}
                    </option>)
                })
            }
        </select>
    )
}

export default Selector