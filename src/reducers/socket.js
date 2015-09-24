import { SOCKET_CONNECT } from '../action-types';

const initialState = {
  socket: null,
  channel: null,
};

export default function socket(state = initialState, action) {
  switch (action.type) {
  case SOCKET_CONNECT:
    const { socket, channel } = action.payload;
    return { ...state, socket, channel};
  default:
    return state;
  }
}
