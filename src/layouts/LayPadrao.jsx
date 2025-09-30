import { Outlet } from "react-router-dom";
import HeaderMobi from "../componentes/header/HeaderMobi";


const LayPadrao = () => {

    return(
        <>
         <HeaderMobi/>
         <Outlet/>
        </>
    )
}

export default LayPadrao;