//@Author William E. Velázquez A. - info@williamvelazquez.com
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import {ToggleSwitch} from '../ToggleSwitch';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('ToggleSwitch', () => (
    <ToggleSwitch 
      disabled={boolean('Disabled', true)}
      handleToggle={()=>console.log('toggle')}
      isChecked={boolean('Active', true)}
      trueColor={text('Active Color', '#4A90E2')}
      falseColor={text('Inactive Color', '#D9534F')}
    />
  ),{ info: 'Switch for Boolean Values'});