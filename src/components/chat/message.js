
import { Component,  Element, PropTypes, createElement } from 'react';
import classNames from 'classnames';
import moment from 'moment';

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
    return <div className={classNames({
      'message': true,
      'message-first': this.props.wide
    })}>
      <img src={this.props.image} className='message-user-image'/>
      <div className='message-meta'>
        <span className='message-user-name'>{this.props.name}</span>
        <span className='message-timestamp'>
          {moment(this.props.timestamp).format('h:mm A')}
        </span>
      </div>
      <div className='message-content'>lol</div>
    </div>;
  }
}
