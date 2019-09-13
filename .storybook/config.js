//@Author William E. Velázquez A. - info@williamvelazquez.com
import { configure } from '@storybook/react';

//We use context from Webpack to change the context to search the stories.
//Path where we search, Search on subdirectories?, Regular Expression to search files.
const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  // require('../stories/index.js');
  // You can require as many stories as you need.
  // const req = require.context('../stories', true, /\.stories\.js$/);

  // const req = require.context('../src/stories', true, /\.js$/);
  // req.keys().forEach(filename => req(filename));
  // require('../src/stories');

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);