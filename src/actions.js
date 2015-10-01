import { createAction } from 'redux-actions';

import generalChannelId from 'lib/general-channel-id';
import { Socket } from './vendor/phoenix';

import { MESSAGE_SEND, SOCKET_CONNECT } from './action-types';

// TODO: get token from auth flow
/* eslint-disable max-len */
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NsZXJrLmF1dGgwLmNvbS8iLCJzdWIiOiJnaXRodWJ8MTk0ODkyIiwiYXVkIjoiVGdVS0s0RllpdUVsRE9RMVJZTG5pODN3dWRnWDBIaEkiLCJleHAiOjE0NDU0MDU2OTMsImlhdCI6MTQ0MjgxMzY5M30.UQjV3rE3l_8foCfr0SisRb1q2HGZ1h0N1-H2KOBE7ds';
/* eslint-enable max-len */

export const messageSend = createAction(MESSAGE_SEND, (/* obj */) => {
  // TODO: Send the chat over the websocket passed in
});

export const socketConnect = createAction(SOCKET_CONNECT, () => {
  const socket = new Socket(
    'wss://slerk-api.herokuapp.com/socket',
    {params: {token}}
  );

  // If we're in a stubbed Phoenix lib on the server, bail early
  if (typeof socket.connect !== 'function') {
    return {};
  }

  socket.connect();

  const channel = socket.channel(`channels:${generalChannelId}`);
  channel.join().receive('ok', () => {
    // console.log('channel joined');
  });

  return {
    channel,
    socket,
  };
});
