import express from "express";
const musicaRoutes = express.Router();
import musicaController from "../controllers/musicController.js";
import Auth from "../middleware/Auth.js";


// Endpoint para listar todos os games (rota)
musicaRoutes.get("/musicas", Auth.Authorization, musicaController.getAllMusicas);

// Endpoint para cadastrar um jogo
musicaRoutes.post("/musicas", Auth.Authorization ,musicaController.createMusica);

// Endpoint para excluir um jogo
musicaRoutes.delete("/musicas/:id", Auth.Authorization ,musicaController.deleteMusica);

// Endpoint para alterar um jogo
musicaRoutes.put("/musicas/:id", Auth.Authorization ,musicaController.updateMusica)

// Endpoint para listar um único jogo
musicaRoutes.get("/musicas/:id", Auth.Authorization ,musicaController.getOneMusica)

export default musicaRoutes;
