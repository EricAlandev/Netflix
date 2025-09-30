// models/elenco.js
import { DataTypes } from "sequelize";
import sequelize from "../../db.js"; // ajusta o caminho se precisar

const Elencos = sequelize.define("Elenco", {
  elenco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "elenco", // nome da tabela no banco
  timestamps: false,   // se não quiser createdAt/updatedAt
});

// Associação
Elencos.associate = (models) => {
  Elencos.belongsTo(models.Programa, {
    foreignKey: "programaID",
    as: "elencoPertence",
  });
};

export default Elencos;
