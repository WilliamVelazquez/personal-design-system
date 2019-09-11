//@Author William E. Velázquez A. - info@williamvelazquez.com
import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';

import ToggleSwitch from '../components/ToggleSwitch';

storiesOf('ToggleSwitch', module)
  .add('on', () => (
    <ToggleSwitch 
      isChecked={true}
      trueColor='#4A90E2'
      falseColor='#D9534F'
    />
  ))
  .add('off', () => (
    <ToggleSwitch 
      isChecked={false}
      trueColor='#4A90E2'
      falseColor='#D9534F'
    />
  ));