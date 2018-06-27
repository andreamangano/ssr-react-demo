import styled, { css } from 'styled-components';

const base = css`
  border: 1px solid grey;
  padding: 15px;
  cursor: pointer;
`;

const title = css`
  color: red
`;

const abstract = css`
  color: blue
`;

export const BaseStyled = styled.div`${base}`;
export const TitleStyled = styled.h4`${title}`;
export const AbstractStyled = styled.h4`${abstract}`;
