import { Component, Element, PropTypes, createElement } from 'react';
import moment from 'moment';

import styles from './timestamp.scss';

export default class Timestamp extends Component {

  static propTypes = {
    insertedAt: PropTypes.string.isRequired
  };

  render() : Element {
    const { insertedAt } = this.props;
    return (
      <span className={styles.default}>
        {moment(insertedAt).format('h:mm A')}
      </span>
    );
  }
}
