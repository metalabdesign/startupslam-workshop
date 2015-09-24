import { Component, Element, PropTypes, createElement } from 'react';
import Container from './container';

/*
// Uncomment to access available components.
import Avatar from './avatar';
import Name from './name';
import Timestamp from './timestamp';
import Content from './content';
*/

/**
 * Message component
 */
export default class Message extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    /* eslint-disable camelcase */
    inserted_at: PropTypes.string,
    /* eslint-enable camelcase */
    text: PropTypes.string,
    // If we should show the avatar, time, and name
    detailed: PropTypes.bool,
  };

  render() : Element {
    return (
      <Container>
        [message]
      </Container>
    );
  }
}
