import { Component, Element, createElement, PropTypes } from 'react';
import { connect } from 'react-redux';

import { messageSend } from '../actions';

import Sidebar from '../components/sidebar';
import Chat from '../components/chat';

import '../styles/index.scss';
import styles from '../index.scss';

class App extends Component {

  static propTypes = {
    channels: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() : Element {
    const { dispatch, socket, channels } = this.props;

    const boundMessageSend = (message) => {
      dispatch(messageSend(message, socket.channel));
    };

    return (
      <div className={styles.slerk}>
        <Sidebar/>
        <Chat channel={channels.general} messageSend={boundMessageSend} />
      </div>
    );
  }
}

// Select which parts of the global state we need
// Right now it's the whole global state tree
function select(state) {
  return state;
}

// Wire up global state to App
export default connect(select)(App);
