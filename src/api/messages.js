import xr from 'xr';
import { apiRoot, generalChannelId } from '../constants';

export function retrieveMessages(authToken, chanId = generalChannelId) {
  return xr.get(`${apiRoot}/channels/${chanId}/messages`, null, {
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${authToken}`
    },
  });
}
