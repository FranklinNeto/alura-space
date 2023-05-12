import CardList from "../CardList";
import Tags from "../Tags";
import styles from "./Galeria.module.scss";

function Galeria() {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <CardList />
    </section>
  );
}

export default Galeria;
