import { Component, Element, createElement } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../components/sidebar';
import Chat from '../components/chat';

import '../styles/index.scss';
import styles from '../index.scss';

class App extends Component {
  render() : Element {
    return (
      <div className={styles.slerk}>
        <Sidebar/>
        <Chat/>
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
