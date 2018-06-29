import React, { Component } from 'react'
import { fetchResources } from '../../store/actions'
import { connect } from 'react-redux'
import {
  ResourceCard
} from '../../components'
import {
  BaseStyled,
  TitleStyled,
} from './styled'

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
      <BaseStyled>
        <TitleStyled>React SSR Sample App</TitleStyled>
        <ul>
          {
            resources.map(r => (
              <div
                key={r.slug}
                onClick={() => navigateToResourceDetail({ slug: r.slug })}
                style={{ marginTop: '20px' }}
              >
                <ResourceCard {...r} />
              </div>
            ))
          }
        </ul>
      </BaseStyled>
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
