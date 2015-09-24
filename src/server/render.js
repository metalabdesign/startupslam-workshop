
// Promises.
import Promise from 'bluebird';

// React.
import { createElement } from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

// Prevent XSS.
import escape from 'htmlescape';

// Generic page layout.
import Page from './page';
import Root from '../';

function body({ scripts = [] }) {
  // TODO: This is where any flux magic would go.
  return new Promise((resolve) => {
    const state = { };
    resolve({
      status: 200,
      title: 'Slerk™',
      markup: renderToString(Root),
      scripts: [{
        id: 'state',
        type: 'text/json',
        content: escape(state)
      }, ...scripts]
    });
  });
}

function html(props) {
  const markup = renderToStaticMarkup(<Page {...props}/>);
  return Promise.resolve({
    ...props,
    markup: `<!DOCTYPE html>${markup}`
  });
}

export default function render(props) {
  return Promise.all([
    body(props)
  ]).then(([body]) => {
    return html({
      ...props,
      ...body
    });
  });
}
