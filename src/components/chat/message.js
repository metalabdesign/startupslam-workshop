import { Component, Element, PropTypes, createElement } from 'react';
import moment from 'moment';

import RichText from '../rich-text';
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
    user: PropTypes.object.isRequired,
    time: PropTypes.string,
    text: PropTypes.string,
    wide: PropTypes.bool,
  };

  render() : Element {
    const { user, text, time, wide } = this.props;

    return <div className={wide ? styles.first : styles.normal}>
      <img src={user.picture} className={styles.userImage}/>
      <div className={styles.meta}>
        <span className={styles.userName}>{user.name}</span>
        {' '}
        <span className={styles.timestamp}>
          {moment(time).format('h:mm A')}
        </span>
      </div>
      <RichText className={styles.content} text={text}/>
    </div>;
  }
}
