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
  constructor(name, img, types, base_experience, height, weight, abilities) {
    this.name = name;
    this.img = img;
    this.types = types;
    this.base_experience = base_experience;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
  }
}

async function getPokemon(nameOrId) {
  try {
    let p = new Pokemon();
    axios.get(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
    .then(async (res) => {
      p.name = res.data.name;
      p.img = res.data.sprites.other.dream_world.front_default;
      p.types = await getTypesInSpanish(res.data.types);
      p.base_experience = res.data.base_experience;
      p.height = res.data.height;
      p.weight = res.data.weight;
      p.abilities = await getAbilitiesInSpanish(res.data.abilities);
    })
    .catch((err) => {
      console.log(err);
    });
    return p;
  } catch (error) {
    console.error(error);
  }
}

export { getPokemon };
