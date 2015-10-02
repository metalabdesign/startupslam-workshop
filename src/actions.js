import { createAction } from 'redux-actions';

import { setToken, parseHash } from './utils/auth';
import { Socket } from './vendor/phoenix';
import { token, generalChannelId } from './constants.js';
import { retrieveMessages } from './api/messages';
import {
  MESSAGE_SEND,
  MESSAGES_FETCH,
  AUTH_COMPLETE,
  SOCKET_CONNECT
} from './action-types';

// TODO: get token from auth flow

export const messageSend = createAction(MESSAGE_SEND, (/* obj */) => {
  // TODO: Send the chat over the websocket passed in
});

export const messagesFetch = createAction(MESSAGES_FETCH, retrieveMessages);

export const socketConnect = createAction(SOCKET_CONNECT, () => {
  const socket = new Socket(
    'wss://slerk-api.herokuapp.com/socket',
    {params: {token}}
  );
  socket.connect();

  const channel = socket.channel(`channels:${generalChannelId}`);
  channel.join().receive('ok', () => {
    // console.log('channel joined');
  });

  return { channel, socket };
});

export const completeAuthentication = createAction(AUTH_COMPLETE, () => {
  const token = parseHash(window.location.hash);

  if (token) {
    window.location.hash = '';
    setToken(token);
    return { token };
  }
});
