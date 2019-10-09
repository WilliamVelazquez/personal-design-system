/**
 * @author William Velazquez <info@williamvelazquez.com>
 */
import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import {LabelInput} from '../LabelInput';
import { GlobalStyle } from '../../GlobalStyles';

const LabelInputComponent = () => {
	const [value, setValue] = React.useState('');
	return (
    <>
      <GlobalStyle />
      <LabelInput
        id={text('Id', 'labelId')}
        label={text('Label Text', 'Username')}
        validate={boolean('Validation', false)}
        value={value}
        type={text('Input Type', 'text')}
        placeholder={text('Placeholder', 'XXXXXX')}
        autocomplete={text('Autocomplete', 'off')}
        handleChange={event=>setValue(event.target.value)}
        helpText={text('Help Text', 'Max length: 6 characters')}
      />
    </>
  );
}

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .add('LabelInput', () => <LabelInputComponent />,{ info: 'Input with a Label and a small help text for validation messages'});