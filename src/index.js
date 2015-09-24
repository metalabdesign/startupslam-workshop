
import { Component, createElement } from 'react';
import Sidebar from './components/sidebar';
import Chat from './components/chat';
import BuildInfo from './components/build-info';

import './styles/index.scss';

export default class Root extends Component {
  render() {
    return <div>
      <div className="slerk">
        <Sidebar/>
        <Chat/>
      </div>
      <BuildInfo/>
    </div>;
  }
}
