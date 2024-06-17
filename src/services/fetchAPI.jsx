export const fetchPokemons = async () => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
        const data = await response.json()
        
        const pokemonDetails = await Promise.all(data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
        }));

        return pokemonDetails

    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        return null
    }
}