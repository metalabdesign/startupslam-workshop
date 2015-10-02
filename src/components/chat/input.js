import { Component, Element, PropTypes, createElement } from 'react';

import styles from './input.scss';

/**
 * whatami
 */
export default class Header extends Component {

  static propTypes = {
    messageSend: PropTypes.func.isRequired,
  }

  // Initial state for the component instance
  state = {
    value: '',
  }

  onKeyPress(ev) {
    // On enter, submit the chat msg and clear the field
    if (ev.keyCode === 13) {
      alert('Implement me');
    }
  }

  onChange(ev) {
    this.setState({value: ev.target.value});
  }

  render() : Element {
    return <div className={styles.input}>
      {/* <button className={styles.upload}>Upload</button> */}
      <input
        type='text'
        value={this.state.value}
        className={styles.text}
        placeholder='Type a message and hit enter'
        onKeyDown={this.onKeyPress.bind(this)}
        onChange={this.onChange.bind(this)}
      />
      {/* <button className={styles.emoji}>Emoji</button> */}
    </div>;
  }
}
