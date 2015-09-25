
import { Component, Element, createElement } from 'react';

/**
 * whatami
 */
export default class Header extends Component {

  static propTypes = {

  }

  render() : Element {
    return <div className="sidebar-header">
      <h1>MetaLab</h1>
      <div className="sidebar-header-account">
        <span className="account-status account-status-online"/>
        <span className="account-name">Izaak Schroeder</span>
      </div>
    </div>;
  }
}
