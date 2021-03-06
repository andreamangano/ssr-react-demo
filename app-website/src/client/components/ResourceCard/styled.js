import styled, { css } from 'styled-components'
import { typographyStyles } from '../../styles'

const base = css`
  padding: 20px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #e5ded7;
  border-radius: 5px;
 
  &:hover {
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
  }
`;

const title = css`
  ${typographyStyles.h4}
  color: #212121;
`;

const details = css`
  ${typographyStyles.small}
  margin-top: 5px;
`;

const abstract = css`
  ${typographyStyles.small}
  color: #8e8a87;
  margin-top: 10px;
`;

export const BaseStyled = styled.div`${base}`;
export const TitleStyled = styled.h4`${title}`;
export const DetailsStyled = styled.div`${details}`;
export const AbstractStyled = styled.p`${abstract}`;
