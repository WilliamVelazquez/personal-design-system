//@Author William E. Velázquez A. - info@williamvelazquez.com
import styled from 'styled-components';

export const DivCheckbox = styled.div`
  /* ${InputCheckbox}:checked + ${SpanButtonCheckbox} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  } */

  /* ${LabelCheckbox}:active ${SpanButtonCheckbox} & {
    width: 60px;
  } */
`;

export const InputCheckbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const LabelCheckbox = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 70px;
  height: 39px;
  /* width: 100px;
  height: 50px; */
  margin: 2px auto;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color .2s;
  background-color: ${props => props.isChecked?props.trueColor:props.falseColor};
`;

export const SpanButtonCheckbox = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 35px;
  height: 35px;
  /* width: 45px;
  height: 45px; */
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  
  ${InputCheckbox}:checked + & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;