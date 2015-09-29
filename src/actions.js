import createAction from 'redux-actions';

import { MESSAGE_SEND } from './action-types';

export const messageSend = createAction(MESSAGE_SEND, (/* obj */) => {
  // TODO: Send the chat over the websocket passed in
});
