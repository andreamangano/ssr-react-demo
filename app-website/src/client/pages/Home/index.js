import React, { Component } from 'react';
import { fetchResources } from '../../store/actions';
import { connect } from 'react-redux';
import {
  ResourceCard
} from '../../components';

class Home extends Component {

  componentDidMount() {
    this.props.fetchResources();
  }

  navigateToResourceDetail = ({ slug }) =>
    this.props.history.push(`/resource/${slug}`);

  render() {

    const {
      resources
    } = this.props;

    const {
      navigateToResourceDetail
    } = this;

    return (
      <div>
        <h3>Welcome to the React SSR Demo</h3>
        <ul>
          {
            resources.map(r => (
              <div
                key={r.slug}
                onClick={() => navigateToResourceDetail({ slug: r.slug })}
              >
                <ResourceCard {...r} />
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { resources: state.resources.list };
}

export default {
  component: connect(mapStateToProps, { fetchResources })(Home),
  loadData(store) {
    return store.dispatch(fetchResources())
  }
};
