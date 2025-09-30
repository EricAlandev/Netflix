
import {Link} from 'react-router-dom'

const HeaderMobi = () => {

    return(
        <header
        className='flex justify-between items-center '//ml-4 mr-4
        >
            {/*Logo */}
            <Link
            to={'/'}
            >
                <img src="/assets/header/LogoS.png" 
                alt="" 
                className="max-h-[100px]"
                />
            </Link>

            {/*Login */}
            <Link
            to={'/usuario/entrar'}
            className='p-2 font-[Inter] font-medium text-[14.5px] text-[white] bg-[#E50914] rounded-[8px]'
            >
                Entrar
            </Link>
        </header>
    )
}

export default HeaderMobi;