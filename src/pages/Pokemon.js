import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Pokemon() {
    const {pokemonName} = useParams();
    const [pokemon, setPokemon] = useState(null);
    
    return (
        <div>
            <p>{pokemonName}</p>
        </div>
    );
}

export default Pokemon;