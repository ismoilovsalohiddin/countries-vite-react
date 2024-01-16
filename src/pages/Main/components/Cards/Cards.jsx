import cls from './styles.module.css'
import { Link } from 'react-router-dom'

function Cards({flag, common, population, region, capital}){
    return(<article className={cls.countries__item}>
        <Link to={`/detail/${common}`}>
            <img className={cls.countries__img} src={flag} alt={common+" flag"} width={267} height={160}/>
            <h2 className={cls.countries__heading}>{common}</h2>
            <dl className={cls.countries__info}>
                                    
                <dt className={cls.dt}>Population:</dt>
                <dd className={cls.dd}> {population}</dd>
                            
                <dt className={cls.dt}>Region:</dt>
                <dd  className={cls.dd}>{region}</dd>
                            
                <dt className={cls.dt}>Capital:</dt>
                <dd  className={cls.dd}>{capital}</dd>
            </dl>
        </Link>
    </article>
    )
}
export default Cards