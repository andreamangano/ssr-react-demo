import styled, { css } from 'styled-components'
import { typographyStyles } from '../../styles'

const base = css``;

const title = css`
  ${typographyStyles.h2}
  color: #212121;
  margin-bottom: 30px;
`;

export const BaseStyled = styled.div`${base}`;
export const TitleStyled = styled.h4`${title}`;
