
import { Component, Element, createElement } from 'react';

import Header from './header';
import Conversation from './conversation';
import Input from './input';

/**
 * whatami
 */
export default class Chat extends Component {

  static propTypes = {

  }

  render() : Element {
    return <div className="chat">
      <Header/>
      <Conversation/>
      <Input/>
    </div>;
  }
}
