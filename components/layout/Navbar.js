import Icon from "components/utils/Icon";
import Linky from "components/utils/Linky";

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='navbar-right'>
                    <a href='#proyectos'>
                        PROYECTOS
                    </a>
                    <a href='#sobremi'>
                        SOBRE MI
                    </a>
                </div>
                <div className='navbar-left'>
                    <a href='https://github.com/frankalvarezdev' target='_blank' rel="noreferrer">
                        <i className='brand-github'/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar;