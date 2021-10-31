import Icon from "components/utils/Icon";
import Linky from "components/utils/Linky";

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='navbar-right'>
                    <Linky to='/'>
                        HOME
                    </Linky>
                    <Linky to='/'>
                        PROYECTOS
                    </Linky>
                    <Linky to='/'>
                        SOBRE MI
                    </Linky>
                </div>
                <div className='navbar-left'>
                    <a href='https://github.com/frankalvarezdev' target='_blank'>
                        <i className='brand-github'/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar;