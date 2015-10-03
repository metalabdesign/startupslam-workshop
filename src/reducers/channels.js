import { isArray, takeRight, sortBy } from 'lodash';
import { generalChannelId } from '../constants';
import { MESSAGES_FETCH, MESSAGE_RECEIVE } from '../action-types';

// Single channel called 'general' for now
// Uses a simple message state shape, will have to convert server responses
const initialState = {
  general: {
    displayName: 'general',
    topic: 'Slerk: now with 60% more *erk*',
    id: generalChannelId,
    messages: [
      {
        user: {
          // TODO: Host this somewhere else
          picture: 'http://i.imgur.com/6MEyk9n.jpg',
          online: false,
          nickname: 'slerkbot',
          name: 'Slerkbot',
          id: 'github|194892',
        },
        text: 'Welcome to Slerk!',
        /* eslint-disable camelcase */
        inserted_at: '2015-09-30T01:28:23+00:00',
        /* eslint-enable camelcase */
        meta: null,
        id: 'UUID-GOES-HERE',
        channel: {
          name: 'general',
          id: '1c6edb3c-92a9-4031-b8b8-f194e2399db6',
        },
      },
    ],
  },
};

function addMessagesToState(state, data) : Object {
  const msgLimit = 10000;
  // If we get a single message, then make an array out of it
  const messages = isArray(data) ? data : [data];
  const sorted = sortBy([
    ...state.general.messages,
    ...messages
  ], 'inserted_at');
  const clamped = takeRight(sorted, msgLimit);

  return {
    ...state,
    general: {
      ...state.general,
      messages: clamped,
    },
  };
}

export default function channels(state = initialState, action) : Object {
  switch (action.type) {
  case MESSAGE_RECEIVE:
  case MESSAGES_FETCH:
    return addMessagesToState(state, action.payload);
  default:
    return state;
  }
}
