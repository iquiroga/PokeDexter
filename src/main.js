import Vue from 'vue'

// BootstrapVue
import './plugins/bootstrapVue'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
