import { combineReducers } from 'redux';

import channels from './channels';
import users from './users';
import socket from './socket';

// Combine individual reducers into our top-level reducer
export default combineReducers({
  channels,
  users,
  socket,
});
