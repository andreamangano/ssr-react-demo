import styled, { css } from 'styled-components'

const base = css`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 20px 0;
`;

const nav = css`
  padding: 10px 0;
`;

export const BaseStyled = styled.div`${base}`;
export const NavStyled = styled.div`${nav}`;
