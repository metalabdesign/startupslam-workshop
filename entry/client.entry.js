// Core react.
import { createElement } from 'react';
import { render } from 'react-dom';

// Base component.
import Root from 'index';

// Get the root element.
const root = document.getElementById('content');

function loadState() {
  try {
    const stateElement = document.getElementById('state');
    const stateData = stateElement.textContent || stateElement.innerText;
    return JSON.parse(stateData);
  } catch (err) {
    return { };
  }
}

// Get the application state.
const state = loadState();

// Build the app component.
const component = <Root {...state}/>;

// Mount the root component.
render(component, root);
