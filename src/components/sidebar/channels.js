
import { Component, createElement } from 'react';

/**
 * whatami
 */
export default class ChannelList extends Component {
  render() : Component {
    const channels = [ ];
    return <div>
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
