// Single channel called "general" for now
// Uses a simple message state shape, will have to convert server responses
const initialState = {
  general: [
    {
      userId: 'github|874928',
      name: 'Jason Trill',
      avatarUrl: 'https://avatars2.githubusercontent.com/u/399469?v=3&s=460',
      message: 'Hey there, this is a message',
      time: '2015-09-26T07:18:22Z',
    }
  ],
};

export default function channels(state = initialState, action) {
  switch (action.type) {
  default:
    return state;
  }
}
