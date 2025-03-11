import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";
//Função para listar jogos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    // Requisição feita com sucesso - Cod. 200 (OK)
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

//Função para cadastrar jogos

const createGame = async (req, res) => {
  try {
    const { title, platform, year, price } = req.body;
    await gameService.Create(title, platform, year, price);
    res.status(201).json({ message: "Jogo cadastrado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      gameService.Delete(id);
      res.sendStatus(204); // Requisição feita com sucesso - Cod. 204
    }else{
      res.sendStatus(400); // Má requisição - Cod. 400 (Bad Request)
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};
export default { getAllGames, createGame, deleteGame };
