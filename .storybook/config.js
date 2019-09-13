//@Author William E. Velázquez A. - info@williamvelazquez.com
import { configure } from '@storybook/react';

import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

// import pinkPanther from  './pinkPanther';
import williamLogo from '../src/images/LogoWhite_55.png';

addParameters({
  options: {
    theme: {
      ...themes.dark,
      colorSecondary: '#8e1a1a',
      brandTitle: `William's Personal Design System`,
      brandUrl: 'https://williamvelazquez.com/',
      brandImage: williamLogo
    }
    // theme: themes.dark
    // theme: pinkPanther
  }
});

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