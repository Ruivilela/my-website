import Vue from 'vue';
import App from './app/index.vue';

const src = new Vue({
  el: '#app',
  render: h => h(App),
});

export default src;
