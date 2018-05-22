import Vue from 'vue';
import Vuex from 'vuex';
import { configure } from '@storybook/vue';
import vueComponents from './registry';

vueComponents();

function loadStories() {
  require('./stories');
}

configure(loadStories, module);