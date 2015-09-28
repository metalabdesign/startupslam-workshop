
import { Component, Element, createElement } from 'react';

import Header from './header';
import Channels from './channels';

import styles from './index.scss';

/**
 * whatami
 */
export default class Sidebar extends Component {

  static propTypes = {

  }

  render() : Element {
    return <div className={styles.sidebar}>
      <Header/>
      <Channels/>
    </div>;
  }
}
