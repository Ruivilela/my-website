import Vue from 'vue';
import App from './app';
import store from './store';

export default new Vue({
  el: '#app',
  store,
  render: r => r(App),
});

