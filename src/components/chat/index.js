
import { Component, createElement } from 'react';

import Header from './header';
import Conversation from './conversation';
import Input from './input';

/**
 * whatami
 */
export default class Chat extends Component {
  render() : Component {
    return <div>
      <Header/>
      <Conversation/>
      <Input/>
    </div>;
  }
}
