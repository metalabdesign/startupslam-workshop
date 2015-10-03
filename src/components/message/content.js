import { Component, Element, PropTypes, createElement } from 'react';

import RichText from '../rich-text';
import styles from './content.scss';

export default class Content extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() : Element {
    const { text } = this.props;
    return <RichText className={styles.default} text={text} />;
  }
}
