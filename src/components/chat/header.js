import { Component, Element, PropTypes, createElement } from 'react';

import styles from './header.scss';

/**
 * whatami
 */
export default class Header extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
  }

  render() : Element {
    return <div className={styles.header}>
      <h1 className={styles.channelName}>
        <span className={styles.hashSign}>#</span>
        [title]
      </h1>
      <span className={styles.topic}>[topic]</span>
    </div>;
  }
}
