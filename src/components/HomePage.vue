<template>
  <div class="home">
    <div>
      <h1>{{ msg }}</h1>
      <p>Buscar Pokémon por nombre o Id</p>
    </div>
    <div>
      <input v-model="nameOrId" placeholder="search by name or id">
      <p>Nombre: {{pokemonName}}</p>
      <p>Imagen: <img :src="img" alt=""></p>
      <p>Tipo: {{types}}</p>
      <p>Experiencia base: {{base_experience}}</p>
      <p>Altura: {{height}} </p>
      <p>Peso: {{weight}}</p>
      <p>Habilidades: {{abilities}}</p>
      <button class="btn btn-danger" @click="fetch(nameOrId)">Search</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getPokemon } from '../api/pokeApi'

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data() {
    return {
      pokemonName: '',
      img: '',
      types: '',
      nameOrId: '',
      base_experience: '',
      height: '',
      weight: '',
      abilities: '',
    }
  },  
  methods: {
    fetch(nameOrId) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
        .then(res => {
          this.pokemonName = res.data.name;
          this.img = res.data.sprites.other.dream_world.front_default;
          this.types = res.data.types[0].type.name + ' ' + res.data.types[1].type.name ;
          this.base_experience = res.data.base_experience;
          this.height = res.data.height;
          this.weight = res.data.weight;
          this.abilities = res.data.abilities[0].ability.name + ' ' + res.data.abilities[1].ability.name;
          })
        .catch(err => {
          console.log(err);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
