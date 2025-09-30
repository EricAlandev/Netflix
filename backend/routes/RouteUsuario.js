import { Router } from "express";
import { criarUsuario, gerarCodigo, loginUsuario, verificarCodigo } from "../controllers/ControllerUsuario.js";

const usuario = Router();

usuario.post("/cadastro", criarUsuario);
usuario.post("/login", loginUsuario);

usuario.post("/geraCodigo", gerarCodigo);
usuario.post("/verificaCodigo", verificarCodigo);




export default usuario;