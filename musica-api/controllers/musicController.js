import musicaService from "../services/musicService.js";
import { ObjectId } from "mongodb";

// Função para listar os jogos
const getAllMusicas = async (req, res) => {
  try {
    const musicas = await musicaService.getAll();
    // Requisição feita com sucesso - Cod. 200 (OK)
    res.status(200).json({ musicas: musicas });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para cadastrar jogos
const createMusica = async (req, res) => {
  try {
    // const title = req.body.title
    // const platform = req.body.platform

    // Desestruturação
    // Capturando valores
    const { title, year, price, descriptions } = req.body;
    // Cadastrando no banco
    await musicaService.Create(title, year, price, descriptions);
    res.sendStatus(201); // Código 201 (CREATED)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para deletar jogos
const deleteMusica = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      musicaService.Delete(id);
      res.sendStatus(204); // Código 204 (NO CONTENT)
    } else {
      res.sendStatus(400); // Código 400 (BAD REQUEST)
      // Requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para alterar um jogo
const updateMusica = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      // Desestruturação
      //const title = req.body.title
      const { title, year, price, descriptions } = req.body;
      musicaService.Update(id, title, year, price, descriptions);
      res.sendStatus(200); // Código 200 (OK): Requisição bem sucedida
    } else {
      res.sendStatus(400); // Código 400 (Bad Request): Requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para buscar um único jogo
const getOneMusica = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const musica = await musicaService.getOne(id);
      if (!musica) {
        res.sendStatus(404); // Código 404: NOT FOUND - Não encontrado
      } else {
        res.status(200).json({ musica });
      }
    } else {
      res.sendStatus(400); // Código 400: Bad Request
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // Erro interno do servidor
  }
};

export default { getAllMusicas, createMusica, deleteMusica, updateMusica, getOneMusica };
