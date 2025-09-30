
import {Link} from 'react-router-dom'

//Header Mobile simples, apenas a logo
const HeaderMobiS = () => {

    return(
        <header
        className=''
        >
            {/*Logo */}
            <Link
            to={'/homepage/UserPage'}
            >
                <img src="/assets/header/LogoS.png" 
                alt="" 
                className="max-h-[100px]"
                />
            </Link>

        </header>
    )
}

export default HeaderMobiS;