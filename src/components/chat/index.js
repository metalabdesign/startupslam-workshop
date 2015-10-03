import { Component, Element, createElement, PropTypes } from 'react';
import { takeRight } from 'lodash';

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

    // Only display the last x messages for perf reasons
    const messages = takeRight(channel.messages, 100);

    return <div className={styles.chat}>
      <Header title={channel.displayName} topic={channel.topic}/>
      <Conversation messages={messages}/>
      <Input messageSend={messageSend}/>
    </div>;
  }
}
