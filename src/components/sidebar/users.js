import { Component, Element, createElement, PropTypes } from 'react';

import User from './user';

import styles from './users.scss';

/**
 * I am your worst nightmare. 👻
 */
export default class Users extends Component {

  static propTypes = {
    users: PropTypes.object.isRequired,
  }

  render() : Element {
    const { users } = this.props;

    return (
      <div className={styles.users}>
        <h1>Users</h1>
        <ul>
          {Object.values(users).map(user =>
            <User key={user.id} user={user} />)}
        </ul>
      </div>
    );
  }
}
