import Container from "../Container/Container"
import cls from "./styles.module.css"
function Header(){
    return(
        <header className={cls.header}>
            <Container>
                <div className={cls.header__content}>
                    <h1 className={cls.header__text}>Where in the world?</h1>
                    <button className={cls.header__btn}>Dark Mode</button>
                </div>
            </Container>
        </header>
    )
}

export default Header