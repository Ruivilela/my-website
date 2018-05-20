import Vue from 'vue';
import App from './app/index.vue';

const src = new Vue({
  el: '#app',
  render: r => r(App),
});

export default src;
