
import { Component, Element, createElement } from 'react';
import Sidebar from './components/sidebar';
import Chat from './components/chat';
// import BuildInfo from './components/build-info';

import './styles/index.scss';

import styles from './index.scss';

export default class Root extends Component {
  render() : Element {
    return <div className={styles.slerk}>
      <Sidebar/>
      <Chat/>
    </div>;
  }
}
