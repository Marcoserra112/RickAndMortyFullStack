import Card from './Card';
import styles from './estilos/Cards.module.css'
export default function Cards({characters, onClose }) {
   return <div className={styles.containerCards}>
   {characters.map((character) => {


      return (
         <Card
            id={character.id}
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.sprecies}
            gender={character.gender}
            image={character.image}
            origin={character.origin.name}
            onClose={onClose}
            />
      )
   })}

</div>
}
