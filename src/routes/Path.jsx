import { BrowserRouter, Route, Routes } from "react-router-dom";

import LayPadrao from '../layouts/LayPadrao';
import LayCadastro from '../layouts/LayCadastro';
import LayHomePage from '../layouts/LayHomePage'
import LayProgramaPage from "../layouts/LayProgramaPage";


import Login from "../componentes/SignInSignOut/Login";
import Codigo from "../componentes/SignInSignOut/Codigo.JSX";
import UserPage from "../pages/UserPage";
import ProgramaPage from "../pages/ProgramaPage";





const Path = () => {


    return(
    <>
      <BrowserRouter>
        <Routes>
                <Route path='/' element={<LayPadrao/>}>
                </Route>

                <Route path="/usuario" element={<LayCadastro/>}>
                   <Route path="/usuario/cadastro" element={<Login/>}/>
                   <Route path="/usuario/entrar" element={<Login/>}/>
                   <Route path="/usuario/entrar/Codigo" element={<Codigo/>}/>

 
                </Route>

                <Route path="/homepage" element={<LayHomePage/>}>
                  <Route index element={<UserPage/>}/>
                </Route>

                <Route path="/programa/:id" element={<LayProgramaPage/>}>
                  <Route index element={<ProgramaPage/>}/>
                </Route>


        </Routes>
      </BrowserRouter>
    </>
    )
}

export default Path;