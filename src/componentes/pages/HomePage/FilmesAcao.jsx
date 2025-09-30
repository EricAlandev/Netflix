
import { useEffect, useState } from "react";
import axios from 'axios';

import { ContextoGlobal } from "../../globalContext/GlobalContext";
import { Swiper, SwiperSlide } from "swiper/react";
import EsqPrograma from "../../esqueletos/programa/EsqPrograma";

const FilmesAcao = () => {

    const {BASE_URL} = ContextoGlobal();

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

          const PuxarCategoria = async () => {
            try {
              const response = await axios.get(`${BASE_URL}/programas/CategoriaAcao`);
              console.log("Dados recebidos:", response.data);
              setFilmes(response.data)
            } catch (error) {
              console.error("Erro na requisição async:", error);
            }
        }
    
          PuxarCategoria();
        }, [])

    
    return(
        <div className="ml-2 mr-2">  
          <Swiper
          slidesPerView={2}
          spaceBetween={20}
          className="max-w-[350px] mx-auto"
          >
          {filmes.map((item) => (
            <SwiperSlide
            key={item.id}
            >
                <EsqPrograma
                para={`/programa/${item.categoriaChamada.id}`}
                capa={item.categoriaChamada?.capa}
                top10={item.categoriaChamada?.colocacaoTop10}
                />
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
    )
}

export default FilmesAcao