import React from 'react';
import { useParams } from 'react-router-dom';

function Pokemon(props) {
    const {pokemonName} = useParams();
    return (
        <div>
            <p>{pokemonName}</p>
        </div>
    );
}

export default Pokemon;