<template>
  <div class="home">
    <div>
      <h1>{{ msg }}</h1>
      <p>Buscar Pokémon por nombre o Id</p>
    </div>
    <div>
      <input v-model="nameOrId" placeholder="search by name or id">
      <p>Nombre: {{pokemon.name}}</p>
      <p><img :src="pokemon.img" alt=""></p>
      <p>Tipo: {{pokemon.types}}</p>
      <p>Experiencia base: {{pokemon.base_experience}}</p>
      <p>Altura: {{pokemon.height}} </p>
      <p>Peso: {{pokemon.weight}}</p>
      <p>Habilidades: {{pokemon.abilities}}</p>
      <button class="btn btn-danger" @click="fetch(nameOrId)">Search</button>
    </div>
  </div>
</template>

<script>
import { getPokemon } from '../api/pokeApi'

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data() {
    return {
      nameOrId: '',
      pokemon: {},     
    }
  },  
  methods: {
    async fetch(nameOrId) {
      this.pokemon = await getPokemon(nameOrId);
    }
  }
}
</script>