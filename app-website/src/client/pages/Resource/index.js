import React, { Component } from 'react';
import { fetchSingleResource } from '../../store/actions';
import { connect } from 'react-redux';

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
          !resource &&
          <div>Loading</div>
        }
        {
          resource &&
          <div>
            <h3>{resource.title}</h3>
            <p>{resource && resource.abstract}</p>
          </div>
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
