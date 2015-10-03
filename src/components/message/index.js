import { Component, Element, PropTypes, createElement } from 'react';

import Container from './container';
import Avatar from './avatar';
import Name from './name';
import Timestamp from './timestamp';
import Content from './content';

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
    detailed: PropTypes.bool,
  };

  render() : Element {
    const { user, text, detailed } = this.props;
    /* eslint-disable camelcase */
    const insertedAt = this.props.inserted_at;
    /* eslint-enable camelcase */

    if (detailed) {
      return (
        <Container detailed={detailed}>
          <Avatar user={user} />
          <Name user={user} />
          <Timestamp insertedAt={insertedAt} />
          <Content text={text} />
        </Container>
      );
    }

    return (
      <Container detailed={detailed}>
        <Content text={text} />
      </Container>
    );
  }
}
