
import { Component, Element, createElement } from 'react';


import styles from './channels.scss';

/**
 * whatami
 */
export default class ChannelList extends Component {

  static propTypes = {

  }

  render() : Element {
    const channels = [{name: 'general'}];
    return <div className={styles.channels}>
      <h1 className={styles.header}>Channels</h1>
      <ul>
        {channels.map(channel =>
          <li className={styles.channel}>
            <span className={styles.channelHash}>#</span>
            {' '}
            {channel.name}
          </li>
        )}
      </ul>
    </div>;
  }
}
