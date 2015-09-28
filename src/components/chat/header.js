
import { Component, Element, createElement } from 'react';

import styles from './header.scss';

/**
 * whatami
 */
export default class Header extends Component {

  static propTypes = {

  }

  render() : Element {
    return <div className={styles.header}>
      <h1 className={styles.channelName} >Development</h1>
      <span className={styles.topic}>The most magical place.</span>
      <span className={styles.userCount}>Users: 12</span>
    </div>;
  }
}
