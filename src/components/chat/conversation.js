import { Component, Element, PropTypes, createElement } from 'react';
import { delay } from 'lodash';

import Message from '../message';

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

  state = {
    scrollAtBottom: true,
  }

  componentWillReceiveProps() {
    // Determine if we're scrolled all the way down
    // We need to do this so we can conditionally scroll to a new message only
    // if the user was already at the bottom (or within a few px)
    const { scrollTop, scrollHeight, offsetHeight } = this.refs.conversation;

    // If the user is allllmost at the bottom, scroll anyway
    const scrollFudge = 10;

    this.setState({
      scrollAtBottom: (scrollTop + offsetHeight - scrollHeight) >= -scrollFudge,
    });
  }

  componentDidUpdate() {
    // If we were scrolled to the bottom of the conversations window when a new
    // message comes in, scroll down after render
    if (!this.state.scrollAtBottom) {
      return;
    }

    // Just set a ridiculous scrollTop and the browser will figure it out
    const scroll = () => this.refs.conversation.scrollTop = 99999999999;
    // DOM is slow - getting wrong offsetHeight/scrollHeight, so delay it
    delay(scroll, 100);
  }

  renderMessages() {
    // TODO: group sequential messages from a user
    // TODO: group messages by date and display date header:
    //   <div className={styles.dateBreakActive}>September 21st</div>
    return this.props.messages.map(message => {
      return <Message detailed {...message}/>;
    });
  }

  render() : Element {
    return (
      <div ref='conversation' className={styles.conversation} >
        <div className={styles.messages}>
          {this.renderMessages()}
        </div>
      </div>
    );
  }
}
