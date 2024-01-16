const CountriesInfo = ()=>{
    return(
        <div className="countries">
            <div className="counntries__img">
                <img src="https://flagcdn.com/au.svg" alt="flag" />
            </div>
            <div className="countries__info">
                <h2 className="title">Australia</h2>
                <dl className="data__list">
                    <div className="data__left">
                        <dt className="dt">Native Name:</dt>
                        <dd className="dd">Australia</dd>

                        <dt className="dt">Population:</dt>
                        <dd className="dd">25,200,000</dd>

                        <dt className="dt">Region:</dt>
                        <dd className="dd">Australia and New Zealand</dd>

                        <dt className="dt">Sub Region:</dt>
                        <dd className="dd">Australia</dd>

                        <dt className="dt">Capital:</dt>
                        <dd className="dd">Canberra</dd>
                    </div>
                    <div className="data__right">
                            <dt className="dt">Top Level Domain:</dt>
                            <dd className="dd">.au</dd>

                            <dt className="dt">Currencies:</dt>
                            <dd className="dd">Australian Dollar</dd>

                            <dt className="dt">Languages:</dt>
                            <dd className="dd">English</dd>
                    </div>
                </dl>
                <div className="border">
                    <p className="border__title">Border Countries:</p>
                    <ul className="border__list">
                        <li className="border__item">United States</li>
                        <li className="border__item">New Zealand</li>
                        <li className="border__item">Iceland</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}