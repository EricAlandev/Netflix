import { ContextoGlobal } from "../globalContext/GlobalContext";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Codigo = () => {

    const {BASE_URL, login} = ContextoGlobal();

    const navigate = useNavigate();
    const dados = useLocation();

    const email = dados.state?.email || null;

    useEffect(() => {
        if (!email) return; // evita chamada se email estiver vazio
    
        const enviarEmail = async () => {
          try {
            const response = await axios.post(`${BASE_URL}/usuario/geraCodigo`, { email: email });
            console.log("Resposta da API:", response.data);
          } catch (error) {
            console.error("Erro ao enviar o email:", error);
          }
        };
    
        enviarEmail();
      }, [email]); // o useEffect dispara sempre que 'email' mudar

    //pegar a senha que o user digitou.
    const [codigo, setCodigo] = useState({codigo: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCodigo((prevDados) => ({ //Interessante fazer a arrow function, porque como ele tem a propriedade dos dados. Acaba que ele tem que ativar o state de novo. Com isso pegando o valor mais atual.
          ...prevDados,
          [name]: value,
        }));
      };

    const handleSubmit = async (e) => {
        e.preventDefault(); // previne o comportamento padrão do form (recarregar a página)
    
        try {
          const response = await axios.post(`${BASE_URL}/usuario/verificaCodigo`, {
            codigo: codigo.codigo, email: email
          });
    
          console.log("Resposta da API:", response.data);
          // Aqui você pode tratar redirecionamento, mensagens de sucesso, etc.
          console.log(response.data.usuario)
          console.log(response.data.token)

          login(response.data.usuario, response.data.token);
          navigate("/homepage");

    
        } catch (error) {
          console.error("Erro ao enviar o formulário:", error);
          // Aqui você pode mostrar mensagem de erro pro usuário
        }
      };

    return(
    <main className="min-h-screen ml-4 mr-4">
        <form 
            onSubmit={handleSubmit}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[350px] max-w-[360px]"
            >
                <label
                className=" font-[Inter] font-medium text-[#D1D1D1] text-[18px] " 
                htmlFor="codigo"
                >
                    Digite o codigo enviado para:  <br />
                    <span className="ml-2 text-[15.5px] underline">{email}</span>
                </label>

                <input 
                type="text"
                id="codigo"
                name="codigo"
                value={codigo.codigo}
                onChange={handleChange}
                placeholder="Código de 6 dígitos..."
                className="w-full min-h-[55px] mt-[25px] mb-[5px] pl-3 py-2 text-[#D1D1D1] border-[#D1D1D1] border-[2px] rounded-[6px]  
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
    </main>
    )
}

export default Codigo;