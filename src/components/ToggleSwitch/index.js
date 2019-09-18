//@Author William E. Velázquez A. - info@williamvelazquez.com
import React from 'react';

import { DivCheckbox, InputCheckbox, LabelCheckbox, SpanButtonCheckbox } from './styles';

export const ToggleSwitch = (props) => {
  const { id, isChecked, handleToggle, trueColor, falseColor } = props;
  return (
    <DivCheckbox>
      <InputCheckbox
        type="checkbox"
        id={id||null}
        checked={isChecked}
        onChange={handleToggle}
      />
      <LabelCheckbox
        isChecked={isChecked}
        trueColor={trueColor}
        falseColor={falseColor}
        htmlFor={id||null}
      >
        <SpanButtonCheckbox />
      </LabelCheckbox>
    </DivCheckbox>
  );
}
// export default ToggleSwitch;
