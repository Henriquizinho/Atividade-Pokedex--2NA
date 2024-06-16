export const fetchPokemons = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        const data = response.json()
        return data
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        return null
    }
}