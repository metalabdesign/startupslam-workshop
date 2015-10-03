import { Component, Element, PropTypes, createElement } from 'react';

import styles from './avatar.scss';

export default class Avatar extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() : Element {
    const { picture } = this.props.user;
    return <img src={picture} className={styles.default}/>;
  }
}
