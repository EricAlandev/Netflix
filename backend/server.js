import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./db.js";
import usuario from "./routes/RouteUsuario.js";
import telao from "./routes/RouteTelao.js";
import programa from "./routes/RoutePrograma.js";

dotenv.config();

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json()); // Para parsear JSON do corpo das requisições

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Servidor rodando normalmente!",
  });
});


app.use("/usuario", usuario);
app.use("/telao", telao);
app.use("/programas", programa);



// Middleware global de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Erro interno do servidor",
    },
  });
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Testa a conexão com o banco
    await sequelize.authenticate();
    console.log("✅ Conexão com MySQL estabelecida!");

    // Sincroniza os modelos (tabelas)
    //await sequelize.sync({ alter: true });
    console.log("📦 Modelos sincronizados com o banco!");

    app.listen(PORT, () => {
      console.log(`🚀 Server rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Falha ao iniciar o servidor:", error);
  }
}

startServer();
