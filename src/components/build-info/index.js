/* global BUILD_COMMIT BUILD_VERSION */

import { Component, createElement } from 'react';

/**
 * whatami
 */
export default class BuildInfo extends Component {
  render() : Component {
    return <div>
      <span>Build: {BUILD_COMMIT}</span>
      <span>Version: {BUILD_VERSION}</span>
    </div>;
  }
}
