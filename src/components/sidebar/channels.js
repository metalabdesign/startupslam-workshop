
import { Component, Element, createElement } from 'react';


import styles from './channels.scss';

/**
 * whatami
 */
export default class ChannelList extends Component {

  static propTypes = {

  }

  render() : Element {
    const channels = [ ];
    return <div className={styles.channels}>
      <h1>Channels</h1>
      <a href=''>New</a>
      <ul>
        {channels.map(channel =>
          <li>
            <a href=''>{channel.name}</a>
          </li>
        )}
      </ul>
      +10 More…
    </div>;
  }
}
