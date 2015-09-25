
import { Component, Element, createElement } from 'react';
import Sidebar from './components/sidebar';
import Chat from './components/chat';
// import BuildInfo from './components/build-info';

import './styles/index.scss';

export default class Root extends Component {
  render() : Element {
    return <div className="slerk">
      <Sidebar/>
      <Chat/>
    </div>;
  }
}
