import { Component, Element, createElement, PropTypes } from 'react';
import { connect } from 'react-redux';

import { messageSend, updateUserPresence } from '../actions';

import Sidebar from '../components/sidebar';
import Chat from '../components/chat';

import '../styles/index.scss';
import styles from '../index.scss';

class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    channels: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
  }

  componentWillMount() {
    const { dispatch, socket } = this.props;
    this._presenceChannel = socket.socket.channel('users:presence');
    this._presenceChannel.on('status_updated', payload =>
        dispatch(updateUserPresence(payload)));
    this._presenceChannel.join();
  }

  componentWillUnmount() {
    this._presenceChannel.close();
  }

  render() : Element {
    const { dispatch, socket, channels, users } = this.props;

    const boundMessageSend = (message) => {
      dispatch(messageSend(message, socket.channel));
    };

    return (
      <div className={styles.slerk}>
        <Sidebar users={users}/>
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
