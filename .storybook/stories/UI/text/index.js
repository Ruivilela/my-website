import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

storiesOf('UI/text', module)
  .add('text' , r => ({
    template: '<ui-text text="just a text"/>'
  }));
