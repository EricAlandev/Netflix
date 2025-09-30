import {Outlet } from "react-router-dom";
import HeaderMobiS from "../componentes/header/HeaderMobiS";
import Footer from "../componentes/footer/Footer";


const LayCadastro = () => {

    return(
        <div
        className="min-h-screen bg-[black] "
        >

         <div
         className="pl-8"
         >
            <HeaderMobiS/>
         </div>

         <Outlet/>
         
         <div
         className="pl-8"
         >
            <Footer
                numero="0800 0591 4943"
                v1="Perguntas frequentes"
                v2="Central de ajuda"
                v3="Conta"
                v4="Media Center"
                v5="Relações com investidores"
                v6="Carreiras"
                v7="Resgatar cartão pré-pago"
                v8="Comprar cartão pré-pago"
                v9="Formas de assistir"
                v10="Termos de uso"
                v11="Privacidade"
                v12="Preferências de cookies"
                v13="Informações corporativas"
                v14="Entre em contato"
                v15="Teste de velocidade"
                v16="Avisos legais"
                v17="Só na Netflix"
                />
         </div>
         
        </div>
    )
}

export default LayCadastro;