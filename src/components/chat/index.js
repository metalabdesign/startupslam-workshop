import { Component, Element, createElement, PropTypes } from 'react';

import Header from './header';
import Conversation from './conversation';
import Input from './input';

import styles from './index.scss';

/**
 * whatami
 */
export default class Chat extends Component {

  static propTypes = {
    channel: PropTypes.object.isRequired,
    messageSend: PropTypes.func.isRequired,
  }

  render() : Element {
    const { channel, messageSend } = this.props;

    return <div className={styles.chat}>
      <Header title={channel.displayName} topic={channel.topic}/>
      <Conversation messages={channel.messages}/>
      <Input messageSend={messageSend}/>
    </div>;
  }
}
