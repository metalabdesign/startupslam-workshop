import { Component, Element, PropTypes, createElement } from 'react';

import Message from './message';

import styles from './conversation.scss';

/**
 * A collection of messages.
 */
export default class Conversation extends Component {

  static propTypes = {
    messages: PropTypes.array.isRequired,
  }

  static defaultProps = {
    messages: [],
  }

  renderMessages() : Array {
    // TODO: group sequential messages from a user
    // TODO: group messages by date and display date header:
    //   <div className={styles.dateBreakActive}>September 21st</div>
    return this.props.messages.map(message => {
      return <Message wide {...message}/>;
    });
  }

  render() : Element {
    return <div className={styles.conversation}>
      <div className={styles.messages}>
        {this.renderMessages()}
      </div>
    </div>;
  }
}
