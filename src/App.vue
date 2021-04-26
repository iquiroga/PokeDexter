<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet">
    <img alt="Pokemon logo" src="./assets/Pokemon_logo.svg">
    <main>
      <HomePage msg="PokeDexter"/>
    </main>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
require('./assets/css/main.css');
export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>