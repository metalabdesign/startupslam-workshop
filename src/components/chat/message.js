
import { Component,  Element, PropTypes, createElement } from 'react';
import moment from 'moment';

import styles from './message.scss';

/*
<Timestamp/>
<Star/>
<Avatar/> <Name/>
<Content/>
<Actions/>
 */

/**
 * whatami
 */
export default class Message extends Component {

  static propTypes = {
    timestamp: PropTypes.date,
    image: PropTypes.string,
    name: PropTypes.string,
    wide: PropTypes.boolean
  };

  render() : Element {
    return <div className={this.props.wide ? styles.first : styles.normal}>
      <img src={this.props.image} className={styles.userImage}/>
      <div className={styles.meta}>
        <span className={styles.userName}>{this.props.name}</span>
        <span className={styles.timestamp}>
          {moment(this.props.timestamp).format('h:mm A')}
        </span>
      </div>
      <div className={styles.content}>lol</div>
    </div>;
  }
}
