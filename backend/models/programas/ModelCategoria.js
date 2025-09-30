// models/categoria.js
import { DataTypes } from "sequelize";
import sequelize from "../../db.js";

const Categoria = sequelize.define("Categoria", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  categoria: {
    type: DataTypes.STRING, // equivale a VARCHAR
    allowNull: false,
  },
}, {
  tableName: "categorias", // nome da tabela no banco
  timestamps: false,       // se não quiser createdAt/updatedAt
});

Categoria.associate = (models) => {
    Categoria.belongsTo(models.Programa, {
      foreignKey: "programaId",
      as: "categoriaChamada",
    });
  };

export default Categoria;
