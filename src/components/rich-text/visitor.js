
import { createElement } from 'react';

const FIRST_WORD = /^[^\ \t]+(?=[\ \t]|$)/;
const CLOSING = ['hr', 'img', 'br'];
const BLACKLISTED_ATTRIBUTES = ['id', 'name'];

function normalizeURI(uri) {
  return uri;
}

function detab(code) {
  return code;
}

function encode(entry) {
  return entry;
}

function h(context, node, name, attributes, children) {
  const closing = CLOSING.indexOf(name) !== -1;

  attributes.key = ++context.reactKeyCounter;

  if (node !== null && node.attributes) {
    for (const key of BLACKLISTED_ATTRIBUTES) {
      delete attributes[key];
    }
  }

  if (closing) {
    return createElement(name, attributes);
  }

  return createElement(
    name,
    attributes,
    ...(Array.isArray(children) ? children : [children])
  );
}

export default class ReactCompiler {

  constructor(file, options) {
    this.file = file;
    this.options = options;
    this.reactKeyCounter = 0;
  }

  visit(node, parent) {
    if (typeof this[node.type] !== 'function') {
      return '';
    }

    return this[node.type](node, parent);
  }

  compile() {
    return this.visit(this.file.namespace('mdast').tree);
  }

  all(parent) {
    const values = [];
    let index = -1;
    const length = parent.children.length;
    let value;

    while (++index < length) {
      value = this.visit(parent.children[index], parent);
      if (value) {
        values.push(value);
      }
    }
    return values;
  }

  root(node) {
    return createElement('div', this.options.attributes, ...this.all(node));
  }

  blockquote(node) {
    return h(this, node, 'blockquote', {}, this.all(node), true);
  }

  list(node) {
    return h(this, node, node.ordered ? 'ol' : 'ul', {
      start: node.start !== 1 ? node.start : null
    }, this.all(node), true);
  }

  listItem(node, parent) {
    const single = !parent.loose &&
        node.children.length === 1 &&
        node.children[0].children;
    const result = this.all(single ? node.children[0] : node);
    return h(this, node, 'li', {}, result, !single);
  }

  heading(node) {
    return h(this, node, `h${node.depth}`, {}, this.all(node));
  }

  paragraph(node) {
    return h(this, node, 'p', {}, this.all(node), false);
  }

  code(node) {
    const value = node.value ? detab(node.value) : '';
    const language = node.lang && node.lang.match(FIRST_WORD);
    return h(this, node, 'pre', {}, h(this, node, 'code', {
      className: language ? `language-${language[0]}` : null
    }, value, false), false);
  }

  table(node) {
    const rows = node.children;
    let index = rows.length;
    const align = node.align;
    const alignLength = align.length;
    let pos;
    const result = [];
    let row;
    let out;
    let name;

    while (index--) {
      pos = alignLength;
      row = rows[index].children;
      out = [];
      name = index === 0 ? 'th' : 'td';

      while (pos--) {
        out[pos] = h(this, row[pos], name, {
          align: align[pos]
        }, row[pos] ? this.all(row[pos]) : '');
      }

      result[index] = h(this, rows[index], 'tr', {}, out, true);
    }

    return h(this, node, 'table',
      {},
      [h(this, node, 'thead', {}, result[0], true),
      h(this, node, 'tbody', {}, result.slice(1), true)],
      true
    );
  }

  html(node) {
    return encode(node.value);
  }

  horizontalRule(node) {
    return h(this, node, 'hr', {});
  }

  inlineCode(node) {
    return h(this, node, 'code', {}, encode(node.value));
  }

  strong(node) {
    return h(this, node, 'strong', {}, this.all(node));
  }

  emphasis(node) {
    return h(this, node, 'em', {}, this.all(node));
  }

  break(node) {
    return h(this, node, 'br', {});
  }

  link(node) {
    return h(this, node, 'a', {
      href: normalizeURI(node.href),
      title: node.title
    }, this.all(node));
  }

  image(node) {
    return h(this, node, 'img', {
      src: normalizeURI(node.src),
      alt: node.alt || '',
      title: node.title
    });
  }

  delete(node) {
    return h(this, node, 'del', {}, this.all(node));
  }

  text(node) {
    return h(this, node, 'span', {}, node.value);
  }

  escape(node) {
    return this[node.value === '\n' ? 'break' : 'text'](node);
  }
}
