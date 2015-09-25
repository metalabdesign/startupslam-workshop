
import { Element, Component, createElement } from 'react';

/**
 * whatami
 */
export default class Login extends Component {
  render() : Element {
    return <form>
      <input type='text'/>
			<input type='password'/>
			<button>Login</button>
    </form>;
  }
}
