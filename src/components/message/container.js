import { Component, Element, PropTypes, createElement } from 'react';

import styles from './container.scss';

export default class Container extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    detailed: PropTypes.bool.isRequired
  };

  render() : Element {
    const { children, detailed } = this.props;
    return (
      <div className={detailed ? styles.detailed : styles.default}>
        {children}
      </div>
    );
  }
}
