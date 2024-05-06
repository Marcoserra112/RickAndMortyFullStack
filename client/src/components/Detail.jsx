import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const Detail = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState({})
    const APIKEY = 'henrystaff'

    useEffect(() => {
        setTimeout(() => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
            .then(
                ({ data }) => {
                    if (data.name) {
                        setCharacter(data);
                    } else {
                        window.alert('No hay personajes con ese ID');
                    }
                }
            );
        setCharacter({});
    }, 3000);
    }, [id]);

    return character.name ?(
        
        <div>
            <br />
            <h1>{character.name}</h1>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <img src={character.image} alt={character.name} />
        </div>
    ) : (<h1>Cargando Personaje ...</h1>)
}

export default Detail;