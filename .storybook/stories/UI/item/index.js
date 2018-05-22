import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

storiesOf('UI/item', module)
  .add('item with text' , r => ({
    template: '<ui-item text="just a text"/>'
  }));
