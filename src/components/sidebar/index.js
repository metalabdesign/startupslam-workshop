
import { Component, Element, createElement } from 'react';

import Header from './header';
import Channels from './channels';

/**
 * whatami
 */
export default class Sidebar extends Component {

  static propTypes = {

  }

  render() : Element {
    return <div className="sidebar">
      <Header/>
      Channels
      <Channels/>
    </div>;
  }
}
