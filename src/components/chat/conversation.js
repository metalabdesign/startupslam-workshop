
import { Component, createElement } from 'react';

import Message from './message';

/**
 * whatami
 */
export default class Conversation extends Component {
  render() : Component {
    return <div>
      <Message/>
      <Message/>
      <Message/>
    </div>;
  }
}
