import cls from "./styles.module.css"
import { useLocation, useParams} from "react-router-dom"
const CountryDetail =()=>{
    const name = useParams()
    console.log({name})
    return(
        <div className="container">
            <p>Hello</p>
            <p>{name}</p>
        </div>
    )
}
export default CountryDetail