/* global BUILD_COMMIT BUILD_VERSION */

import { Component, createElement } from 'react';

/**
 * whatami
 */
export default class BuildInfo extends Component {
  render() : Component {
    return <div>
      <span>{BUILD_COMMIT}</span>
      <span>{BUILD_VERSION}</span>
    </div>;
  }
}
