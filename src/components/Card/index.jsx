import styles from "./Card.module.scss";
import open from "../../assets/open.png";
import favorito from "../../assets/favorito.png";

function Card({ foto }) {
  return (
    <li className={styles.galeria__card}>
      <img
        className={styles.galeria__imagem}
        src={foto.imagem}
        alt={foto.titulo}
      />
      <p className={styles.galeria__descricao}>{foto.titulo}</p>
      <div>
        <p>{foto.creditos}</p>
        <span>
          <img src={open} alt="ícone coração" />
          <img src={favorito} alt="ícone de abrir modal" />
        </span>
      </div>
    </li>
  );
}

export default Card;
