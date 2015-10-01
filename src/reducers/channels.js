import generalChannelId from '../lib/general-channel-id';
//
// Single channel called 'general' for now
// Uses a simple message state shape, will have to convert server responses
const initialState = {
  general: {
    displayName: 'General',
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
        time: '2015-09-30T01:28:23+00:00',
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

export default function channels(state = initialState, action) {
  switch (action.type) {
  default:
    return state;
  }
}
