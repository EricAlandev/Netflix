import { Router } from "express";
import getTelaoPrincipal from "../controllers/ControllerSerie.js";


const telao = Router();

telao.get("/telaPrincipal", getTelaoPrincipal );

export default telao;