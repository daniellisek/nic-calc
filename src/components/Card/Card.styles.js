import styled from 'styled-components';

export const Container = styled.div`
  background-color: #b7d5d4;
  padding: 16px;
  > h3 {
      text-align: center;
      margin: 0 0 16px;
  }
`;
export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        margin: 8px 0 0;
        -webkit-appearance: none;
        -moz-appearance: textfield;
        border-radius: 8px;
        border: none;
        text-align: center;
        padding: 8px 0;
        background-color: rgba(255,255,255,0.5)
    }
`;