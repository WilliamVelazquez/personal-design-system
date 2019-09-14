//@Author William E. Velázquez A. - info@williamvelazquez.com
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import ToggleSwitch from '.';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('ToggleSwitch', () => (
    <ToggleSwitch 
      isChecked={boolean('Enabled', true)}
      trueColor={text('Enabled Color', '#4A90E2')}
      falseColor={text('Disabled Color', '#D9534F')}
    />
  ));