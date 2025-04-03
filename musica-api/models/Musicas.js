import mongoose from "mongoose";

// Documento aninhado
const descriptionSchema = new mongoose.Schema({
  genre: String,
  platform: String,
  rating: String,
});

const musicaSchema = new mongoose.Schema({
  title: String,
  year: Number,
  price: Number,
  descriptions: [descriptionSchema] // Array de objetos
});

// Aqui está sendo criado a coleção games no banco de dados
const Musica = mongoose.model("Musica", musicaSchema);

export default Musica;
