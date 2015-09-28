
import { Component, Element, createElement } from 'react';

import styles from './input.scss';

/**
 * whatami
 */
export default class Header extends Component {

  static propTypes = {

  }

  render() : Element {
    return <div className={styles.input}>
      <button className={styles.upload}>Upload</button>
      <input type='text' className={styles.text}/>
      <button className={styles.emoji}>Emoji</button>
    </div>;
  }
}
