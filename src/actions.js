import { createAction } from 'redux-actions';

import { setToken, parseHash } from './utils/auth';
import { Socket } from './vendor/phoenix';
import { generalChannelId } from './constants.js';
import { retrieveMessages } from './api/messages';

import {
  MESSAGE_SEND,
  MESSAGES_FETCH,
  AUTH_COMPLETE,
  SOCKET_CONNECT,
} from './action-types';

// TODO: get token from auth flow

export const messageSend = createAction(MESSAGE_SEND, (text, channel) => {
  channel.push('message', {text});
});

export const messagesFetch = createAction(MESSAGES_FETCH, token => {
  return retrieveMessages(token);
});

export const socketConnect = createAction(SOCKET_CONNECT, token => {
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
