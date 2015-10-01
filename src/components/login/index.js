import { Element, Component, createElement } from 'react';
import { startLogin } from '../../utils/auth';

/**
 * Login w/ Auth0
 */
export default class Login extends Component {

  onAuthenticate() {
    startLogin('github');
  }

  render() : Element {
    return (
      <div>
        <h1>[Slerk] Login</h1>
        <button onClick={this.onAuthenticate.bind(this)}>
          Logon with Github
        </button>
      </div>
    );
  }
}
