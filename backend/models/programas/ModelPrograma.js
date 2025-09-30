import { DataTypes } from "sequelize"; //Pra pegar o tipo da column.
import sequelize from "../../db.js"; // Pegar justamente o arquivo onde foi importado o sequelize. No caso db.js

const Programa = sequelize.define("Programa", {
    capa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataLancamento: { // corrigi o nome para algo mais padrão
      type: DataTypes.STRING,
      allowNull: false,
      field: "dataLancamento"
    },
    faixaEtaria: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "faixaEtaria"
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destaque: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    wallpaper: {
      type: DataTypes.STRING,
      allowNull: false, 
    },

    tituloBonito: { //Título com foto 
      type: DataTypes.STRING,
      allowNull: true,
      field: "tituloBonito"
    },

    colocacaoTop10: { //Título com foto 
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "colocacaoTop10"
    },
  }, {
    tableName: "programas", // nome da tabela no banco
    timestamps: false,    // cria createdAt e updatedAt
  });
  
  export default Programa;