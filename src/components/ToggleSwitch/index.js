//@Author William E. Velázquez A. - info@williamvelazquez.com
import React from 'react';

import { DivCheckbox, InputCheckbox, LabelCheckbox, SpanButtonCheckbox } from './styles';
// import './styles.css';

export const ToggleSwitch = (props) => {
  const { id, isChecked, handleToggle, trueColor, falseColor } = props;
  return (
    <DivCheckbox>
      <InputCheckbox
        type="checkbox"
        id={id||`switch-new`}
        checked={isChecked}
        onChange={handleToggle}
      />
      <LabelCheckbox
        isChecked={isChecked}
        trueColor={trueColor}
        falseColor={falseColor}
        htmlFor={id||`switch-new`}
      >
        <SpanButtonCheckbox />
      </LabelCheckbox>
      {/* <input
        type="checkbox"
        id={id||`switch-new`}
        checked={isChecked}
        onChange={handleToggle}
        className="switch-checkbox"
      />
      <label
        style={{ background: isChecked ? trueColor : falseColor }}
        className="switch-label"
        htmlFor={id||`switch-new`}
      >
        <span className={`switch-button`} />
      </label> */}
    </DivCheckbox>
  );
}
// export default ToggleSwitch;
