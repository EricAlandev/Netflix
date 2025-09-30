
// controllers/telaoController.js
import valueAssociate from "../models/index.js"; 

const {Programa, Categoria, Elencos} = valueAssociate;

const getTelaoPrincipal = async (req, res) => {
  try {
    const telaoPrincipal = await Programa.findOne({
      where: { destaque: "Telao" },
    });

    if (!telaoPrincipal) {
      throw new Error("Telao principal não encontrado.");
    }

    return res.status(200).json(telaoPrincipal);
  } catch (error) {
    console.error("Erro no getTelaoPrincipal:", error.message);
    return res.status(500).json({ error: error.message });
  }
};

export default getTelaoPrincipal

//Puxa as categorias das series

export const PuxarCategorias = async (req, res) => {
  try {
    const categoriaAcao = await Categoria.findAll({
      where: {categoria: "ação"  },  
      include: [
        {
          model: Programa, //Ou seja, tá puxando os programas respectivos.
          as: "categoriaChamada", 
          where: {
             tipo : "Filme"
          }
        },
      ],
    });

    console.log("Categorias retornadas:", JSON.stringify(categoriaAcao, null, 2));

    res.status(200).json(categoriaAcao);
  } catch (error) {
    console.error("Erro ao buscar categoria Ação:", error);
    res.status(500).json({ error: "Erro ao buscar categoria Ação" });
  }
};

//Puxa Programa Inteiro + Elenco

export const PuxarProgramaID = async (req, res) => {
 
   try {
     const { id } = req.params;

     console.log("ID recebido:", id);
 
     if (!id) {
       throw new Error("ID não informado.");
     }
 
     const Oprograma = await Elencos.findOne({
       where: { programaID : id },
       include: [
         {
           model: Programa,
           as: "elencoPertence",
         },
       ],
     });

     console.log(" recebido:", Oprograma);

 
     if (!Oprograma) {
       throw new Error("Programa não encontrado.");
     }
 
     return res.status(200).json(Oprograma);
   } catch (error) {
     return res.status(400).json({ erro: error.message });
   }
 };
 