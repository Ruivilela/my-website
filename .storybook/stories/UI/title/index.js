import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

storiesOf('UI/title', module)
  .add('title' , r => ({
    template: '<ui-title title="just a title"/>'
  }));
