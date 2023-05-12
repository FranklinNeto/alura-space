import Card from "../Card";
import styles from "./CardList.module.scss";
import fotos from "./fotos.json";

function CardList() {
  return (
    <ul className={styles.galeria__cards}>
      {fotos.map((element) => {
        return <Card key={element.id} foto={element} />;
      })}
    </ul>
  );
}

export default CardList;
