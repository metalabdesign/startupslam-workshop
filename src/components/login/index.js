import { Element, Component, createElement } from 'react';
import { startLogin } from '../../utils/auth';

import logo from '../../images/logo.svg';
import styles from './index.scss';

/**
 * Login w/ Auth0
 */
export default class Login extends Component {

  onAuthenticate() {
    startLogin('github');
  }

  render() : Element {
    return (
      <div className={styles.login}>
        <nav className={styles.nav}>
          <div>
            <img src={logo} />
            <h1>Slerk</h1>
          </div>
        </nav>
        <div className={styles.page}>
          <div className={styles.card}>
            <img src={logo} />
            <h1>Sign in to Slerk™</h1>
            <button onClick={this.onAuthenticate.bind(this)}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    );
  }
}
