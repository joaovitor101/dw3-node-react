import Musica from "../models/Musicas.js";

class musicaService {
  // Music.find().then(Musics => {
  // //sucesso
  // }).catch(error => {
  // // falha
  // })

  // async / await
  // Função para listar os jogos
  async getAll() {
    try {
      const musica = await Musica.find();
      return musica;
    } catch (error) {
      console.log(error);
    }
  }

  // Função para cadastrar jogos
  async Create(artist, album, year, genre, duration, track) {
    try {
      const newMusica = new Musica({
        artist, 
        album,
        year,
        genre,
        duration,
        track
      });
      // Método do mongoose para cadastrar .save()
      await newMusica.save();
    } catch (error) {
      console.log(error);
    }
  }

  // Função para deletar jogos
  async Delete(id) {
    try {
      await Musica.findByIdAndDelete(id);
      console.log(`Musica com a id: ${id} foi excluído.`);
    } catch (error) {
      console.log(error);
    }
  }

  // Função para alterar jogos
  async Update(id,artist, album, year, genre, duration, track) {
    try {
      await Musica.findByIdAndUpdate(id, {

        artist, 
        album,
        year,
        genre,
        duration,
        track
      });
      console.log(`Dados do Music com a id: ${id} alterados com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }

  // Função para listar um único jogo
  async getOne(id) {
    try {
      const Musica = await Musica.findOne({ _id: id });
      return Musica;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new musicaService();
