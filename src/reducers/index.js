import { combineReducers } from 'redux';

import channels from './channels';
import users from './users';

// Combine individual reducers into our top-level reducer
export default combineReducers({
  channels,
  users,
});
