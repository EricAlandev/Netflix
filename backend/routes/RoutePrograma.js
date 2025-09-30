
import { Router } from "express";
import { PuxarCategorias, PuxarProgramaID } from "../controllers/ControllerSerie.js";

const programa = Router();


programa.get("/CategoriaAcao", PuxarCategorias);
programa.get("/PuxarPrograma/:id", PuxarProgramaID);


export default programa;