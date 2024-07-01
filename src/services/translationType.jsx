const typeMap = {
    grass: "Grama",
    poison: "Veneno",
    fire: "Fogo",
    water: "Água",
    bug: "Inseto",
    normal: "Normal",
    electric: "Elétrico",
    ground: "Terra",
    fairy: "Fada",
    fighting: "Lutador",
    psychic: "Psíquico",
    rock: "Pedra",
    ghost: "Fantasma",
    ice: "Gelo",
    dragon: "Dragão",
    steel: "Metálico",
    flying: "Voador"
};

export const translateTypes = (types) => {
    return types.map(type => typeMap[type] || tipo);
};