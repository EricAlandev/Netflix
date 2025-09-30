import { useEffect, useState } from "react";
import axios from "axios";

import { ContextoGlobal } from "../../globalContext/GlobalContext";
import { Link } from "react-router-dom";


const TelaoDestaque = () => {

    const {BASE_URL} = ContextoGlobal();

    const [dadoTela, setDadoTela] = useState({});

    useEffect(() => {
        const TelaDestaque = async () => {
          try {
            const response = await axios.get(`${BASE_URL}/telao/telaPrincipal`);
            console.log(response.data); 

            setDadoTela(response.data)

          } catch (error) {
            console.error("Erro ao buscar dados:", error);
          }
        };
    
        TelaDestaque(); 
      }, []);

    return(
    <Link

    className={`block relative min-w-[340px] max-w-[342px] min-h-[440px]     max-h-[484px] mx-auto border-[#C0C0C0C0] border-[1px]
    rounded-[12px] `}
    >
        {/*Background */}

        <div
        className="absolute inset-0 bg-black opacity-48 overflow-hidden"
        >
          <img src={dadoTela.capa} 
          alt="" 
          className="absolute inset-0 min-w-[339.5px] max-w-[339.5px] min-h-[480px] max-h-[480px] mx-auto rounded-[8px] object-cover"
          />
        </div>

        {/*Div feita apenas pra logo + tipo */}
        <section className="absolute flex flex-col items-center top-[215px] left-[118px]">

            <div
            className="flex items-center"
            >
              <img src="/assets/header/LogoN.png"
              alt=""
              className="max-h-[20px]"
              />

              <h3 className="ml-[6px] font-[Montserrat] font-[600] text-[16px] text-[#C0C0C0] tracking-[10px]">{dadoTela.tipo}</h3>
            </div>

            <img src={dadoTela.tituloBonito} 
            alt=""
            className="mt-[10px] max-h-[70px]"
           />

        </section>

        

        {dadoTela.colocacaoTop10 && (
        <section className="absolute top-82 left-23 flex items-center font-[Inter] font-[600]">
            <img src="/assets/programas/esqPrograma/top10.png" 
            alt=""
            className="max-h-[35px] rounded-[2px]"
            />

            <h2 className="ml-2 text-[white]"> Top {dadoTela.colocacaoTop10} em filmes</h2>
        </section>
        )}

        {/*Botão de lista + play */}
        <section
        className="absolute top-[380px] left-[12.5px] flex gap-4 "
        >
          <Link className="flex min-w-[150px] justify-center items-center gap-2 p-2 font-[Inter] font-[500]  text-[black] text-center bg-[white]   rounded-[10px]">

              <img src="/assets/programas/esqPrograma/Player.png" 
              alt=""
              className="max-h-[30px]"
              />
              <h2>Assistir</h2>
          </Link>

          <Link className="flex min-w-[150px] justify-center items-center gap-2 p-2 font-[Inter] font-[500]  text-[white] text-center bg-[#6b7280]   rounded-[10px]">

              <img src="/assets/programas/esqPrograma/Plus.png" 
              alt=""
              className="max-h-[30px]"
              />
              <h2>Minha Lista</h2>
          </Link>

        </section>



    </Link>
    )
}

export default TelaoDestaque;