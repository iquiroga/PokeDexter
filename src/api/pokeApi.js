const axios = require("axios");

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

function getPokemon(nameOrId) {
  try {
    const response = axios.get(`${API_URL}${nameOrId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { getPokemon };
