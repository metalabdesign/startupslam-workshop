import { Component, Element, createElement, PropTypes } from 'react';
import classnames from 'classnames';

import styles from './users.scss';

/**
 * Worst nightmare. 👻
 */
export default class Users extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
  }

  render() : Element {
    const { user } = this.props;
    const indicatorStyle = classnames(styles.statusIndicator, {
      [styles.onlineIndicator]: user.online
    });

    return (
      <li className={styles.user}>
        <span className={indicatorStyle}></span>
        {user.name}
      </li>
    );
  }
}
