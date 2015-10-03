/* global BUILD_COMMIT BUILD_VERSION */

import { Component, Element, createElement } from 'react';

/**
 * Display the build information. Handy for debugging and telling what version
 * of the code is deployed to the environment you're currently looking at.
 */
export default class BuildInfo extends Component {
  render() : Element {
    return <div>
      <span>Build: {BUILD_COMMIT}</span>
      <span>Version: {BUILD_VERSION}</span>
    </div>;
  }
}
