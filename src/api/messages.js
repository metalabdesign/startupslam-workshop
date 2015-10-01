import xr from 'xr';
// TODO: get actual token
import { token, apiRoot, generalChannelId } from '../constants';

export function retrieveMessages(authToken = token, chanId = generalChannelId) {
  return xr.get(`${apiRoot}/channels/${chanId}/messages`, null, {
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${authToken}`
    },
  });
}
