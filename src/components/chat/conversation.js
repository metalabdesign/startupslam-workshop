
import { Component, Element, createElement } from 'react';

import Message from './message';

/**
 * A collection of messages.
 */
export default class Conversation extends Component {

  static propTypes = {

  }

  render() : Element {
    const propsA = {
      name: 'Izaak Schroeder',
      image: 'https://avatars2.githubusercontent.com/u/206921?v=3&s=460',
      timestamp: new Date()
    };

    const propsB = {
      name: 'James Phillips',
      image: 'https://avatars2.githubusercontent.com/u/194892?v=3&s=400',
      timestamp: new Date()
    };
    return <div className='conversation'>
      <div className="flex-fill"/>
      <div className="conversation-messages">
        <div className="date-break active">September 21st</div>
        <Message wide {...propsA}/>
        <Message {...propsA}/>
        <Message {...propsA}/>
        <Message wide {...propsB}/>
        <Message {...propsB}/>
        <Message {...propsB}/>
      </div>
    </div>;
  }
}
