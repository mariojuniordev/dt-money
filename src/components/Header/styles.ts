import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem; // 1 rem equivale ao font-size padrão configurado no global CSS (16px desk)
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    border: var(--background) 0.5px solid;

    transition: 0.5s;

    &:hover {
      filter: brightness(0.9);
      color: var(--blue-light);
      background: var(--background);
      border: solid var(--blue-light) 0.5px;
    }
  }
`;

