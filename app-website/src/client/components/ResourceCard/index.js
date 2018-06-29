import React, { Component } from 'react'
import {
  BaseStyled,
  TitleStyled,
  DetailsStyled,
  AbstractStyled,
} from './styled'

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
        <DetailsStyled>{type} by {author}</DetailsStyled>
        <AbstractStyled>{abstract.replace(/^(.{200}[^\s]*).*/, '$1')}...</AbstractStyled>
      </BaseStyled>
    )
  }
}

export default ResourceCard;