import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Item from './../../src/UI/item/index.vue';

storiesOf('My Test story', module)
  .add('story - render', r => ({
    render: r => r(Item)
  }));
