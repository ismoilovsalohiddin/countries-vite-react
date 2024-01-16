import cls from '../Main/styles.module.css'
import Container from "../../components/Container/Container"
import Search from "../../components/Search/Search"
import Selector from "../../components/Selector/Selector"
import Cards from "./components/Cards/Cards"
import { useState, useEffect } from 'react'
const baseUrl = 'https://restcountries.com/v3.1'
const Main = ()=>{

    const [countries, setCountries] = useState([])

    const [search, setSearch] = useState('')

    // const [region, setRegion] = useState('')

    useEffect(()=>{

        const url = search ? `/name/${search}` : '/all'

        fetch(baseUrl+url)
        .then((res)=> res.json())
        .then((data)=> data.length ? setCountries(data) : setCountries([]))
    },[search])

    function onSearchChange(event){
        // console.log(event.target.value);
        setSearch(event.target.value.trim().toLowerCase())
    }
    const options =[
        {
            label:'Filter by Region',
            selected:true,
            disabled:true
        },
        {
            value:'Africa',
            label:'Africa',
        },
        {
            value:'Americas',
            label:'Americas',
        },
        {
            value:'Asia',
            label:'Asia',
        },
        {
            value:'Europe',
            label:'Europe',
        },
        {
            value:'Oceania',
            label:'Oceania',
        },
    ]
    return(
        <Container>
            <form className={cls.form}>
                <Search onChange={onSearchChange} className={cls.input__search} placeholder="Search for a country" type='search' name='search'/>
                <Selector   options={options}/>
            </form>
                <div className={cls.countriesList}>
                    {
                        countries?.map((country, index)=>{
                            return <Cards
                                key={index}
                                flag={country.flags.png}
                                common={country.name.common}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                            />
                        })
                    }
                </div>
        </Container>
    )
}
export default Main