export const fetchPokemons = async (quantity) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${quantity}&offset=0`)
        const data = response.json()
        return data
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        return null
    }
}