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
    inserted_at: PropTypes.string,
    text: PropTypes.string,
    wide: PropTypes.bool,
  };

  render() : Element {

    return (
      <div className={styles.first}>
        <p>[message]</p>
      </div>
    );
  }
}
