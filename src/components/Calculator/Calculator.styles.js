import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1C2826;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0 0 16px;
    text-align: center;
    color: white;
  }
  > div {
    background-color: #4f5d75;
    padding: 16px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-column-gap: 16px;
`;