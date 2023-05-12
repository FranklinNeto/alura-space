import Card from "../Card";
import styles from "./CardList.module.scss";

function CardList({ itens }) {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return <Card key={item.id} foto={item} />;
      })}
    </ul>
  );
}

export default CardList;
