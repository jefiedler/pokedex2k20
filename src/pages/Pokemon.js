import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemon } from '../api/pokemons';

function Pokemon() {
    const {pokemonName} = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try{
                setLoading(true);
                setError(null);
                const fetchedPokemon = await fetchPokemon(pokemonName);
                setPokemon(fetchedPokemon);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        }
        fetchData();
    }, [pokemonName]);
 
    return (
        <div>
            <p>{pokemonName}</p>
        </div>
    );
}

export default Pokemon;