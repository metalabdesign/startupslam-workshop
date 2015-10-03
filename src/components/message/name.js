import { Component, Element, PropTypes, createElement } from 'react';

import styles from './name.scss';

export default class Name extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() : Element {
    const { name } = this.props.user;
    return <span className={styles.default}>{name}</span>;
  }
}
