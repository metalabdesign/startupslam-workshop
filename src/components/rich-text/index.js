
import mdast from 'mdast';
import { Element } from 'react';
import Visitor from './visitor';

export default function Text(attributes) : Element {
  return mdast().use((mdast) => {
    mdast.Compiler = Visitor;
  }).process(attributes.text, {
    attributes: attributes
  });
}
