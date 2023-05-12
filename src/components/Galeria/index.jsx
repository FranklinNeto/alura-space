import CardList from "../CardList";
import Tags from "../Tags";
import styles from "./Galeria.module.scss";
import fotos from "./fotos.json";
import { useState } from "react";

function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((valor) => valor.tag))];
  //new Set() ==> retorna um array sem elementos repetidos

  const filtraFotos = (tag) => {
    if (!tag) {
      //verifica se há parametro sendo passado para a função
      return setItens(fotos);
    }
    const novasFotos = fotos.filter((foto) => foto.tag === tag);
    setItens(novasFotos);
  };
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtraFotos={filtraFotos} />
      <CardList fotos={fotos} itens={itens} />
    </section>
  );
}

export default Galeria;
