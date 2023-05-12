import styles from "./PaginaInicial.module.scss";
import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import Rodape from "../../components/Rodape";
import Galeria from "../../components/Galeria";

const PaginaInicial = () => {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
      </main>
      <div className={styles.galeria}>
        <Galeria />
      </div>
      <Rodape />
    </>
  );
};

export default PaginaInicial;
