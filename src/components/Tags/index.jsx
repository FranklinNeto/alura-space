import styles from "./Tag.module.scss";
function Tags({ tags, filtraFotos }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filtraFotos(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => filtraFotos()}>Todas</li>
      </ul>
    </div>
  );
}

export default Tags;
