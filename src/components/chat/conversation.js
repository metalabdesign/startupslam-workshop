
import { Component, Element, createElement } from 'react';

import Message from './message';

import styles from './conversation.scss';

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
      timestamp: new Date(),
      content: 'Hello please go to http://www.google.ca.'
    };

    const propsB = {
      name: 'James Phillips',
      image: 'https://avatars2.githubusercontent.com/u/194892?v=3&s=400',
      timestamp: new Date(),
      content: '*this* __is__ a `test` <b>hello</b>'
    };
    return <div className={styles.conversation}>
      <div className='flex-fill'/>
      <div className={styles.messages}>
        <div className={styles.dateBreakActive}>September 21st</div>
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
