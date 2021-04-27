<template>
  <div id="app">
    <div>
      <LinksPage/>

      <HeaderPage/>

      <HomePage/>
    </div>
    
    <div class="col-12 p-0 d-flex flex-wrap justify-content-center align-items-end">
        <Carrousel/>

        <FooterPage/>
    </div>
  </div>
</template>

<script>
import LinksPage from './components/LinksPage.vue'
import HeaderPage from './components/HeaderPage.vue'
import HomePage from './views/HomePage.vue'
import Carrousel from './components/CarouselComponent.vue'
import FooterPage from './components/FooterPage.vue'
require('./assets/css/main.css');
export default {
  name: 'App',
  components: {
    LinksPage,
    HomePage,
    HeaderPage,
    Carrousel,
    FooterPage    
  }
}
</script>