import Game from "../models/Games.js";

class gameService {
  // Game.find().then(games => {
  // //sucesso
  // }).catch(error => {
  // // falha
  // })

  // async / await
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }

  async Create(title, platform, year, price) {
    try {
      const newGame = new Game({
        title,
        platform,
        year,
        price,
      });
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }

  //função para deletar jogos

  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id ${id} deletado com sucesso`);
    } catch (error) {
      console.log(error);
    }
  }
}

//Função para cadastrar jogos

export default new gameService();
