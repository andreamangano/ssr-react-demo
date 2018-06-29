import React, { Component } from 'react'
import { fetchSingleResource } from '../../store/actions'
import { connect } from 'react-redux'
import {
  BaseStyled,
  TitleStyled,
  DetailsStyled,
  AbstractStyled,
  LinkStyled,
} from './styled'

class Resource extends Component {

  componentDidMount() {
    const {
      params
    } = this.props.match;

    this.props.fetchSingleResource({ slug: params.slug });
  }

  render() {

    const {
      resource
    } = this.props;

    return (
      <div>
        {
          !resource && <div>Loading...</div>
        }
        {
          resource &&
          <BaseStyled>
            <TitleStyled>{resource.title}</TitleStyled>
            <DetailsStyled>
              {resource.type} by {resource.author}
            </DetailsStyled>
            {
              resource.abstract &&
              <AbstractStyled>{resource.abstract}</AbstractStyled>
            }
            <LinkStyled href={resource.link} target="blank">
              Go to resource
            </LinkStyled>
          </BaseStyled>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { resource: state.resources.detail };
}

export default {
  component: connect(mapStateToProps, { fetchSingleResource })(Resource),
  loadData(store, match) {
    return store.dispatch(fetchSingleResource({ slug: match.params.slug }))
  }
};
