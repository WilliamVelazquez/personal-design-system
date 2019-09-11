//@Author William E. Velázquez A. - info@williamvelazquez.com
import { configure } from '@storybook/react';

function loadStories() {
  // require('../stories/index.js');
  // You can require as many stories as you need.
  // const req = require.context('../stories', true, /\.stories\.js$/);

  const req = require.context('../src/stories', true, /\.js$/);
  req.keys().forEach(filename => req(filename));
  // require('../src/stories');
}

configure(loadStories, module);