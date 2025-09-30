import { DataTypes } from "sequelize";
import sequelize from "../../db.js"; // sua conexão

const User = sequelize.define(
  "User",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isEmail: true,
      }
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true, // começa como NULL
    },
    codigoExpiracao: {
      type: DataTypes.DATE,
      allowNull: true, 
      field: "codigoExpiracao"
    },
  },
  {
    tableName: "usuario",
    timestamps: false, // createdAt e updatedAt
  }
);


export default User;
