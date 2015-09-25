
import { Component, Element, createElement } from 'react';

/**
 * whatami
 */
export default class Header extends Component {

  static propTypes = {

  }

  render() : Element {
    return <div className="chat-input">
      <button className="chat-input-upload">Upload</button>
      <input type="text" className="chat-input-text"/>
      <button className="chat-input-emoji">Emoji</button>
    </div>;
  }
}
