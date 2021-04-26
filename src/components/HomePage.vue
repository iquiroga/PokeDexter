<template>
  <div class="home">
    <div>
      <h1>{{ msg }}</h1>
    </div>
    <div>
      <div>
        <input v-model="nameOrId" placeholder="Buscar por Nombre o Id">
        <button class="btn btn-danger" @click="fetch(nameOrId)">Search</button>
      </div>
      <b-spinner v-show="spinner" variant="danger" label="Text Centered"></b-spinner>
      <div v-show="ok">
        <div class="d-flex flex-wrap justify-content-between">
          <img :src="pokemon.img" alt="pokemon-img" class="col-12 col-md-6">
          <p class="col-12 col-md-6">Nombre: {{pokemon.name}}</p>
        </div>      
        <p>Tipo: {{pokemon.types}}</p>
        <p>Experiencia base: {{pokemon.base_experience}}</p>
        <p>Altura: {{pokemon.height}} </p>
        <p>Peso: {{pokemon.weight}}</p>
        <p>Habilidades: {{pokemon.abilities}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Pokemon, getPokemon } from '../api/pokeApi'

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data() {
    return {
      nameOrId: '',
      pokemon: new Pokemon(),
      ok: false,
      spinner: false,
    }
  },  
  methods: {
    async fetch(nameOrId) {
      this.ok = false;
      this.spinner = true;
      this.pokemon = await getPokemon(nameOrId.toLowerCase());
      if(this.pokemon.ok){
        this.ok = true;
        this.spinner = false;
      }else{
        this.ok = false;
        this.spinner = false;
      }
    }
  }
}
</script>