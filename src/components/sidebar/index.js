import { Component, Element, createElement, PropTypes } from 'react';

import Header from './header';
import Channels from './channels';
import Users from './users';

import styles from './index.scss';

/**
 * whatami
 */
export default class Sidebar extends Component {

  static propTypes = {
    users: PropTypes.object.isRequired,
  }

  render() : Element {
    return (
      <div className={styles.sidebar}>
        <Header/>
        <Channels/>
        <Users {...this.props}/>
        <div className={styles.credit}>
          Made with ♥ by <a href='https://metalab.co'>MetaLab</a>
        </div>
      </div>
    );
  }
}
