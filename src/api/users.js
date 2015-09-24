import xr from 'xr';
import { apiRoot } from '../constants';

export function retrieveUsers(authToken) {
  return xr.get(`${apiRoot}/users`, null, {
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${authToken}`
    },
  });
}
