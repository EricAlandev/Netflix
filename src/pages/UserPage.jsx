import TelaoDestaque from "../componentes/pages/HomePage/TelaoDestaque";
import { ContextoGlobal } from "../componentes/globalContext/GlobalContext";
import FilmesAcao from "../componentes/pages/HomePage/FilmesAcao";


const UserPage = () => {

    const {BASE_URL, user, token, logout} = ContextoGlobal();
    
    if (!token){
        return(
            <h2 className="text-[white]">Não logado</h2>
        )
    }

    return(
     <main
     clas
     >

        <div
        className=" mb-[40px]"
        >
            <TelaoDestaque/>
        </div>

        <FilmesAcao/>
     </main>
    )
}

export default UserPage;