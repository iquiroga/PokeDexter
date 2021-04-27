<template>
<main>
  <div class="home">
    <img class="home-img" src="../../public/PokeDexter.png" />
    <div>
      <div class="d-flex flex-wrap justify-content-center">
          <div class="col-12 d-flex flex-nowrap w-25 justify-content-center">
            <input v-model="nameOrId" placeholder="Buscar por Nombre o Id" class="">
            <button class="btn btn-danger" @click="fetch(nameOrId)"><img class="img-search" src="../../public/magnifying-glass.svg" /></button>
          </div>
          <div class="err" v-if="err">
            <h4>Lo sentimos, Pokémon no encontrado</h4>
            <img class="w-75" src="../../public/giphy.gif"/>
          </div>
          <div class="col-md-8 col-lg-6">
          <p>¿Necesitas ayuda? Intentá:<button class="link-helper" @click="fetch('pikachu')">Pikachu</button>,
            <button class="link-helper" @click="fetch('Charmander')">Charmander.</button>
            También por Id: <button class="link-helper" @click="fetch('1')">1</button>, <button class="link-helper" @click="fetch('7')">7</button>
          </p>
          </div>
      </div>
      <b-spinner v-show="spinner" variant="danger" class="m-5"></b-spinner>
      <div class="pokemon" v-if="ok">
        <div class="d-flex flex-nowrap m-0 pokemon_name_id">
          <p class="pokemon-info m-0 p-0"> {{pokemon.name}}</p>
           <span class="pokemon-info-span">Id.{{pokemon.id}}</span>
        </div>
        <div class="d-flex flex-wrap justify-content-center pokemon-img">
          <img :src="pokemon.img" alt="pokemon-img" class="col-12 col-md-6 col-lg-5 mt-3 mb-3">
        </div>
        
        <div class="table-responsive mt-3">
          <table class="table align-middle table-borderless rounded">
            <thead>
              <tr>      
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-bottom">
                <th scope="row">Tipo</th>
                <td>{{pokemon.types}}</td>                
              </tr>
              <tr class="border-bottom">
                <th scope="row">Experiencia base</th>
                <td>{{pokemon.base_experience}}</td>
              </tr>
              <tr class="border-bottom">
                <th scope="row">Altura</th>
                <td colspan="2">{{pokemon.height}}</td>
              </tr>
              <tr class="border-bottom">
                <th scope="row">Peso</th>
                <td colspan="2">{{pokemon.weight}}</td>
              </tr>
              <tr class="border-bottom">
                <th scope="row">Habilidades</th>
                <td colspan="2">{{pokemon.abilities}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<script>

import { Pokemon, getPokemon } from '../api/pokeApi'

export default {
  name: 'HomePage',
  data() {
    return {
      nameOrId: '',
      pokemon: new Pokemon(),
      ok: false,
      spinner: false,
      err: false,
    }
  },
  methods: {
    async fetch(nameOrId) {
      this.ok = false;
      this.spinner = true;
      this.pokemon = await getPokemon(nameOrId.toLowerCase());
      if(this.pokemon.ok){
        this.err = false;
        this.ok = true;
        this.spinner = false;
      }else{
        this.ok = false;
        this.spinner = false;
        this.err = true;
      }
    },
  }
}
</script>