import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from 'axios';
import { ContextoGlobal } from "../globalContext/GlobalContext";

//Page de login;
const Login = () => {
    
    const {BASE_URL} = ContextoGlobal();

    const navigate = useNavigate();

    const [dados, setDados] = useState({email: "" , senha: ""});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDados((prevDados) => ({ //Interessante fazer a arrow function, porque como ele tem a propriedade dos dados. Acaba que ele tem que ativar o state de novo. Com isso pegando o valor mais atual.
          ...prevDados,
          [name]: value,
        }));
      };

    const handleSubmit = async (e) => {
        e.preventDefault(); // previne o comportamento padrão do form (recarregar a página)
    
        try {
          const response = await axios.post(`${BASE_URL}/usuario/login`, {
            email: dados.email, // pega o email do state
            senha: dados.senha, // pega a senha do state
          });
    
          console.log("Resposta da API:", response.data);
          // Aqui você pode tratar redirecionamento, mensagens de sucesso, etc.
          navigate("/usuario/entrar/Codigo", {state: {email : response.data.email}});
    
        } catch (error) {
          console.error("Erro ao enviar o formulário:", error);
          // Aqui você pode mostrar mensagem de erro pro usuário
        }
      };

    return(
    <main
    className=" ml-4 mr-4"
    >
        
            <h2
            className=" mb-[20px] pt-[60px] font-[Inter] font-bold text-[28px] text-[white]"
            >
                Entrar
            </h2>

            <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 "
            >
                <input 
                type="text"
                name="email"
                value={dados.email}
                onChange={handleChange}
                placeholder="Email ou número de celular"
                className="w-full min-h-[55px] pl-3 py-2 text-[#D1D1D1] border-[#D1D1D1] border-[2px] rounded-[6px]  
                placeholder:font-[Inter]
                placeholder:text-[16.5px] placeholder:text-[#D1D1D1]"
                />

                <input 
                type="password"
                placeholder="Senha"
                name="senha"
                value={dados.senha}
                onChange={handleChange}
                className="w-full min-h-[55px] pl-3 py-2 text-[#D1D1D1] border-[#D1D1D1] border-[2px] rounded-[6px]  
                placeholder:font-[Inter]
                placeholder:text-[16.5px] placeholder:text-[#D1D1D1]"
                />

                <button
                type="submit"
                className="w-full mt-[10px] p-2.5
                font-[Inter] font-medium
                text-[white] text-[15.5px]
                bg-[#E50914] rounded-[6px]
                "
                >
                    Entrar
                </button>
            </form>

            <Link
            className="block w-full mt-[10px] p-2.5
            font-[Inter] font-medium
        text-[white] text-[15.5px] text-center
            underline
            "
            >
                Esqueceu a senha?
            </Link>
            
            {/*Ir para page Login */}
            <div
            className="flex items-center  mt-[10px]"
            >
                <h3
                className=" font-[Inter] font-medium
            text-[#D1D1D1] text-[15.5px]"
                >
                    Primeira vez aqui?
                </h3>

                <Link
                className="
                font-[Inter] font-[800]
            text-[white] text-[15.5px] 
                "
                >
                Assine agora.
                </Link>
            </div>

            <p
            className="mt-[20px] font-[Inter] font-[400]
            text-[#D1D1D1] text-[13px] "
            >
                Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
            </p>
    </main>
    )
}


export default Login;