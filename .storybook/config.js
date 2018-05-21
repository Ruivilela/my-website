import Vue from 'vue';
import Vuex from 'vuex';
import { configure } from '@storybook/vue';
import Item from './../src/UI/item/index.vue';

Vue.component('ui-item', Item);

function loadStories() {
  require('./stories');
}

configure(loadStories, module);