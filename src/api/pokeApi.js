const axios = require("axios");

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

async function getAbilitiesInSpanish(arr) {
  try {
    let pokemon = "";
    let len = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];

      await axios.get(element.ability.url).then((ability) => {
        let abilityNames = ability.data.names;
        for (let j = 0; j < abilityNames.length; j++) {
          let item = abilityNames[j];

          if (item.language.name == "es") {
            if (i != len) {
              pokemon += `${item.name} - `;
            } else {
              pokemon += `${item.name}.`;
            }
          }
        }
      });
    }
    return pokemon;
  } catch (error) {
    console.error(error);
  }
}

async function getTypesInSpanish(arr) {
  try {
    let pokemon = "";
    let len = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];

      await axios.get(element.type.url).then((type) => {
        let typeNames = type.data.names;
        for (let j = 0; j < typeNames.length; j++) {
          let item = typeNames[j];

          if (item.language.name == "es") {
            if (i != len) {
              pokemon += `${item.name} - `;
            } else {
              pokemon += `${item.name}.`;
            }
          }
        }
      });
    }
    return pokemon;
  } catch (error) {
    console.error(error);
  }
}

class Pokemon {
  constructor(
    id,
    name,
    img,
    types,
    base_experience,
    height,
    weight,
    abilities,
    ok = false
  ) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.types = types;
    this.base_experience = base_experience;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.ok = ok;
  }
}

async function getPokemon(nameOrId) {
  let p = new Pokemon();
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
    .then(async (res) => {
      p.id = res.data.id;
      p.name = res.data.name.toUpperCase();
      p.img = res.data.sprites.other.dream_world.front_default;
      p.types = await getTypesInSpanish(res.data.types);
      p.base_experience = res.data.base_experience;
      p.height = res.data.height;
      p.weight = res.data.weight;
      p.abilities = await getAbilitiesInSpanish(res.data.abilities);
      p.ok = true;
    })
    .catch((err) => {
      console.log(err);
    });
  return p;
}

export { Pokemon, getPokemon };
