import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Cria conexão com MySQL usando variáveis do .env
const sequelize = new Sequelize(
  process.env.DB_NAME,   // Nome do banco
  process.env.DB_USER,   // Usuário
  process.env.DB_PASS,   // Senha
  {
    host: process.env.DB_HOST, // Host do banco
    port: process.env.DB_PORT, // Porta
    dialect: "mysql",
    logging: false,           // Muda para true se quiser ver os logs SQL
  }
);

// Testa a conexão
async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexão com MySQL estabelecida com sucesso!");

    // Sincroniza todos os models automaticamente
   // await sequelize.sync({ alter: true });
    console.log("📦 Modelos sincronizados com o banco!");
  } catch (error) {
    console.error("❌ Erro ao conectar no banco de dados:", error);
  }
}

connectDB();

export default sequelize;
