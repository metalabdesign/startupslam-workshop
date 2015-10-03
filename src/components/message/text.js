import { Component, Element, PropTypes, createElement } from 'react';

import RichText from '../rich-text';
import styles from './text.scss';

export default class Avatar extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() : Element {
    const { text } = this.props;
    return <RichText className={styles.default} text={text}/>;
  }
}
