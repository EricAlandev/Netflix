
import axios from 'axios'
import { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";

import { ContextoGlobal } from '../componentes/globalContext/GlobalContext';
import EqPagePrograma from "../componentes/esqueletos/programa/EqPageProgra";


const ProgramaPage = () => {

    const {id} = useParams();

    const {BASE_URL} = ContextoGlobal();

    const [dados, setDados] = useState(null);

    useEffect(() => {
      const buscarDados = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/programas/PuxarPrograma/${id}`);
          setDados(response.data);
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      };
  
      if (id) {
        buscarDados();
      }
    }, [id]);
  

    return(
    <main>
        {dados && (
          <div 
          className='pt-[150px]'
          >
            <EqPagePrograma
          fundo={dados.elencoPertence.wallpaper}
          tipo={dados.elencoPertence.tipo}
          nome={dados.elencoPertence.nome}
          dataLancamento={dados.elencoPertence.dataLancamento}
          idade={dados.elencoPertence.faixaEtaria}
          descricao={dados.elencoPertence.descricao}
          elenco={dados.elenco}

          />
          </div>
        )}
    </main>
    )
}


export default ProgramaPage;