import { useState } from "react";
import styles from "./estilos/SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handlerchange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={styles.containerSearchBar}>
      <input type="search" onChange={handlerchange} value={id} className={styles.input} placeholder="     INGRESE UN ID"/>
      <button onClick={() => onSearch(id)} className={styles.button} >Agregar</button>
    </div>
  );
}
