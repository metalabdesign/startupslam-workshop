import Auth0 from 'auth0-js';

import { auth0Domain, auth0ClientID } from '../constants';
const AUTH0_TOKEN_KEY = 'auth0_token';

const auth0 = new Auth0({
  domain: auth0Domain,
  clientID: auth0ClientID,
  callbackOnLocationHash: true
});

// Naive implementation; doesn't check token expiry or
//   if the token has been revoked. It however, should
//   be okay in context of the presentation however.
export function getToken() {
  return localStorage.getItem(AUTH0_TOKEN_KEY);
}

export function setToken(token) {
  return localStorage.setItem(AUTH0_TOKEN_KEY, token);
}

export function startLogin(provider) {
  auth0.login({ connection: provider });
}

// TODO: Potentially pass up any errors (user canceled, etc.)
export function parseHash(hash) {
  const result = auth0.parseHash(hash);
  return result && result.id_token;
}
