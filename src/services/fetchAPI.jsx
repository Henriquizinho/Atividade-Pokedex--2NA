export const fetchPokemons = async () => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
        const data = await response.json()

        const pokemonDetails = await Promise.all(data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
        }));

        return pokemonDetails

    } catch (error) {
        console.error("Error fetching pokemons data:", error);
        return null
    }
}

export const fetchPokemonDetailed = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()

        return data
    } catch (error) {
        console.error("Error fetching details data:", error);
        return null
    }
}

export const fetchAbilityData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching ability data:', error);
        return null;
    }
}