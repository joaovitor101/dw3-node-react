import styles from "@/components/EditContent/EditContent.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const EditContent = ({ onClose, game }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (game) {
      setId(game._id);
      setTitle(game.title);
      setPlatform(game.descriptions.platform);
      setGenre(game.descriptions.genre);
      setRating(game.descriptions.rating);
      setYear(game.year);
      setPrice(game.price);
    }
  }, [game]); //dependencia é o que faz o useEffect ser executado novamente

  //função pra tratar submissão do formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedGame = {
      title,
      year,
      price,
      descriptions: {
        platform,
        genre,
        rating,
      },
    };
    try {
      const response = await axios.put(
        `http://localhost:4000/games/${id}`,
        updatedGame
      );
      if (response.status === 200) {
        alert("Jogo atualizado com sucesso !");
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* CARD EDIÇÃO */}
      <div className={styles.editModal} id={styles.editModal}>
        <div className={styles.editContent}>
          <span className={styles.modalClose} onClick={onClose}>
            &times;
          </span>
          {/* TITLE */}
          <div className="title">
            <h2>Editar jogo</h2>
          </div>
          <form id="editForm" onSubmit={handleSubmit}>
            <input type="hidden" name="id" />
            <input
              type="text"
              name="title"
              placeholder="Insira o novo título"
              className="inputPrimary"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              name="platform"
              placeholder="Insira a nova plataforma do jogo"
              className="inputPrimary"
              required
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            />
            <input
              type="text"
              name="genre"
              placeholder="Insira o gênero do jogo"
              className="inputPrimary"
              required
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
            <input
              type="text"
              name="rating"
              placeholder="Insira a classificação do jogo"
              className="inputPrimary"
              required
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <input
              type="number"
              name="year"
              placeholder="Insira o novo ano"
              className="inputPrimary"
              required
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <input
              type="text"
              name="price"
              placeholder="Insira o novo preço"
              className="inputPrimary"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input type="submit" value="Alterar" className="btnPrimary" />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditContent;
