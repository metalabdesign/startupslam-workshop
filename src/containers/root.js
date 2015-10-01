import { Component, Element, createElement, PropTypes } from 'react';
import { connect } from 'react-redux';

import { completeAuthentication } from '../actions';
import App from './app';
import Login from '../components/login';

class RootApp extends Component {

  static propTypes = {
    token: PropTypes.string,
  }

  componentWillMount() {
    this.props.dispatch(completeAuthentication());
  }

  render() : Element {
    return createElement(this.props.token ? App : Login);
  }
}

// Wire up auth state to compontent
export default connect(state => ({ token: state.auth.token }))(RootApp);
