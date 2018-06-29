import styled, { css } from 'styled-components'
import { typographyStyles } from '../../styles'

const base = css``;

const title = css`
  ${typographyStyles.h1}
  color: #212121;
`;

const details = css`
  margin-top: 15px;
`;

const abstract = css`
  ${typographyStyles.body}
  color: #8e8a87;
  margin-top: 30px;
`;
const link = css`
  ${typographyStyles.body}
  color: #8e8a87;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  margin-top: 30px;
  display: inline-block;
  padding: 10px 15px;
`;

export const BaseStyled = styled.div`${base}`;
export const TitleStyled = styled.h4`${title}`;
export const DetailsStyled = styled.div`${details}`;
export const AbstractStyled = styled.p`${abstract}`;
export const LinkStyled = styled.a`${link}`;
