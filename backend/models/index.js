import sequelize from "../db.js";
import User from "../models/usuario/Modelusuario.js";
import Programa from "./programas/ModelPrograma.js";
import Categoria from "./programas/ModelCategoria.js";
import Elencos from "./programas/ModelElenco.js";


const valueAssociate = { sequelize, User, Programa, Categoria, Elencos};

// Configura associations
Object.values(valueAssociate) //Pega todos os modelos que eu importar do valueAssociate.
  .filter((model) => typeof model.associate === "function")
  //Filtra pra pegar apenas modelos que tem associação do tipo função
  .forEach((model) => model.associate(valueAssociate));
  //Roda as funções depois de todos os models estão prontos.

export default valueAssociate;
