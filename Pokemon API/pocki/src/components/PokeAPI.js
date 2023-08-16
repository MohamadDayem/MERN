import React, { useState } from 'react';

const PokeAPI = (props) => {
    const [poke, setPoke] = useState([]);
    const handlePoke = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                // not the actual JSON response body but the entire HTTP response
                return response.json();
            }).then(response => {
                setPoke(response.results)
                console.log(poke)
            }).catch(err => {
                console.log(err);
            });
    }
    return (
        <div>
            <button onClick={handlePoke}>Bring Poke</button>
            <ul>
                {poke.map((pokemon, i) =>
                    <li key={i}> {pokemon.name} </li>
                )}
            </ul>
        </div>
    );
}
export default PokeAPI;