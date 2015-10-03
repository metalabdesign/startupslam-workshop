import { Component, Element, PropTypes, createElement } from 'react';
import RichText from '../rich-text';

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
    const { title, topic } = this.props;

    return <div className={styles.header}>
      <h1 className={styles.channelName}>
        <span className={styles.hashSign}>#</span>
        {title}
      </h1>
      <RichText className={styles.topic} text={topic}/>
    </div>;
  }
}
