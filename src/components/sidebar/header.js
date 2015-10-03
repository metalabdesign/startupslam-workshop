
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
      <h1>Startup Slam</h1>
      {/*
      <div className={styles.account}>
        <span className={styles.online}/>
        <span className={styles.name}>Izaak Schroeder</span>
      </div>
      */}
    </div>;
  }
}
