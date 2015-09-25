
import { Component, Element, createElement } from 'react';

/**
 * whatami
 */
export default class Header extends Component {

  static propTypes = {

  }

  render() : Element {
    return <div className="chat-header">
      <h1 className="chat-header-channel-name">Development</h1>
      <span className="chat-header-topic">The most magical place.</span>
      <span className="chat-header-user-count">Users: 12</span>
    </div>;
  }
}
