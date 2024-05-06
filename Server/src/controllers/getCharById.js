const axios = require("axios");
const { stat } = require("fs");

const URL = "https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}";
const APIKEY = "pi-marcoserra98"


const getCharById = (req, res) =>{

    const { id } = req.params;
    axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
    .then((resp)=>{
        let { name, gender, species, origin, image, status } = resp.data;

        const character = {
            id, 
            name,
            gender,
            species,
            species,
            origin,
            image, 
            status,
        };

        return character.name ? res.json(character) : res.status(404).send("NOT FOUND")

    })
    .chatch((reason)=>{
       return res.send(500).send(reason.message)
    })

}

module.exports = getCharById;