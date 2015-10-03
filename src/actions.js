import { createAction } from 'redux-actions';

import { setToken, parseHash } from './utils/auth';
import { Socket } from './vendor/phoenix';
import { generalChannelId } from './constants.js';
import { retrieveMessages } from './api/messages';
import { retrieveUsers } from './api/users';

import {
  MESSAGE_SEND,
  MESSAGE_RECEIVE,
  MESSAGES_FETCH,
  USERS_FETCH,
  USERS_UPDATE_PRESENCE,
  AUTH_COMPLETE,
  SOCKET_CONNECT,
} from './action-types';

export const messageSend = createAction(MESSAGE_SEND, (text, channel) => {
  channel.push('message', {text});
});

export const messageReceive = createAction(MESSAGE_RECEIVE, (obj) => {
  return obj;
});

export const messagesFetch = createAction(MESSAGES_FETCH, (token) => {
  return retrieveMessages(token);
});

export const usersFetch = createAction(USERS_FETCH, (users) => {
  return retrieveUsers(users);
});

export const updateUserPresence = createAction(
  USERS_UPDATE_PRESENCE,
  (payload) => payload
);

export const socketConnect = createAction(SOCKET_CONNECT, (token, dispatch) => {
  const socket = new Socket(
    'wss://slerk-api.herokuapp.com/socket',
    {params: {token}}
  );
  socket.connect();

  const channel = socket.channel(`channels:${generalChannelId}`);
  channel.join().receive('ok', () => {
    channel.on('message', (message) => {
      dispatch(messageReceive(message));
    });
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
