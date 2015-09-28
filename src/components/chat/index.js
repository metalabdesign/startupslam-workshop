
import { Component, Element, createElement } from 'react';

import Header from './header';
import Conversation from './conversation';
import Input from './input';

import styles from './index.scss';

/**
 * whatami
 */
export default class Chat extends Component {

  static propTypes = {

  }

  render() : Element {
    return <div className={styles.chat}>
      <Header/>
      <Conversation/>
      <Input/>
    </div>;
  }
}
