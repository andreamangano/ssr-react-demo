import React, { Component } from 'react';
import {
  BaseStyled,
  TitleStyled,
  AbstractStyled,
} from './styled';

class ResourceCard extends Component {

  render() {
    const {
      title,
      abstract,
      author,
      type,
    } = this.props;

    return (
      <BaseStyled>
        <TitleStyled>{title}</TitleStyled>
        <div>{author}</div>
        <div>{type}</div>
        <AbstractStyled>{abstract}</AbstractStyled>
      </BaseStyled>
    )
  }
}

export default ResourceCard;