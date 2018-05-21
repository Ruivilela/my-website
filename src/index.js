import Vue from 'vue';
import App from './app/index.vue';
import store from './store';

const src = new Vue({
  el: '#app',
  store,
  render: r => r(App),
});

export default src;
