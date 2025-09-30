import { Link } from "react-router-dom";

const EsqPrograma = ({para, capa, top10}) => {


    return(
     <>
        <Link
        to={para}
        className="min-w-[150px] max-w-[150px] relative"
        >
            <img src={capa} 
            alt=""
            className="w-full h-auto"
            />

            <img src="/assets/header/LogoN.png" 
            alt=""
            className="absolute top-2 left-2 w-8 h-8"
            />


            {top10 && (
                <img src="/assets/programas/esqPrograma/top10.png" 
                alt=""
                className="absolute top-0 left-33.5 w-8 h-8"
                />
            )}
        </Link>
     </>
    )
}

export default EsqPrograma;