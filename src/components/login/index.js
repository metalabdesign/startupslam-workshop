
import { Component, createElement } from 'react';

/**
 * whatami
 */
export default class Login extends Component {
  render() : Component {
    return <form>
      <input type='text'/>
			<input type='password'/>
			<button>Login</button>
    </form>;
  }
}
