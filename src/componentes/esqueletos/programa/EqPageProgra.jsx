
import { Link } from "react-router-dom";

const EqPagePrograma = ({fundo, tipo, nome, dataLancamento, idade,descricao, elenco}) => {



    return(
    <>
        <img src={fundo} alt=""
        className=""
        />

        <div
        className="ml-8 mr-8"
        >
            {/*Div feita apenas pra logo + tipo */}
        <section >

        <div
        className="flex items-center mt-[15px] mb-[5px]"
        >
                <img src="/assets/header/LogoN.png"
                alt=""
                className="max-h-[18px]"
                />

                <h3 
                className="ml-[6px] font-[Montserrat] font-[600] text-[14.5px] text-[#C0C0C0] tracking-[10px]">               {tipo}
                </h3>
            </div>
            </section>

            <div
            className=" font-[Inter] font-medium"
            >
            <h1 className="text-[30px] text-[white]">{nome}</h1>

            <div
            className="flex items-center gap-4 font-[Inter] font-medium text-[#C0C0C0]"
            >
                <h3
                className="text-[15px]"
                >
                    {dataLancamento}
                </h3>

                <h3
                className={`px-2 py-1 rounded-[8px] text-[15px] text-[white] 
                ${idade === "16" ?
                 "bg-[red] " :
                  idade == "14" ? "bg-[orange]" : 
                  idade == "18" ? "bg-[black]" : 
                  idade == "14" ? "bg-[orange]" : 
                  idade == "12" ? "bg-[lightgreen]" :
                  idade == "10" ? "bg-[green]" : ""
                }`}
                >
                    {idade}
                </h3>
            </div>
            </div>

            {/*Botão de lista + play */}
        <section
        className="flex flex-col gap-3 mt-[15px]"
        >
          <Link className="flex w-full min-h-[45px] justify-center items-center gap-2 p-2 font-[Inter] font-[500]  text-[black] text-center bg-[white]   rounded-[10px]">

              <img src="/assets/programas/esqPrograma/Player.png" 
              alt=""
              className="max-h-[30px]"
              />
              <h2>Assistir</h2>
          </Link>

          <Link className="flex w-full min-h-[45px] justify-center items-center gap-2 p-2 font-[Inter] font-[500]  text-[white] text-center bg-[#6b7280]   rounded-[10px]">

              <img src="/assets/programas/esqPrograma/Plus.png" 
              alt=""
              className="max-h-[30px]"
              />
              <h2>Minha Lista</h2>
          </Link>

        </section>


            {/*descrição + elenco */}

            <div
            className="font-[Inter]  text-[white]"
            >
                <p
                className="font-[400] text-[20px]"
                >{descricao}</p>

                <h4
                className="font-[Inter] font-medium text-[20px]"
                >
                    <span className="mr-2 font-bold">
                        Estrelando
                    </span>
                    {elenco}
                </h4>
            </div>
        </div>
    </>
    )
}

export default EqPagePrograma;