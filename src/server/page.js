
import { createElement, PropTypes, Component } from 'react';

function script({ path, content, type, id }, i) {
  return path ?
    <script type={type} src={path} key={i}/> :
    <script type={type} key={i} id={id} dangerouslySetInnerHTML={{
      __html: content
    }}/>;
}

function style({ path, type, content }, i) {
  return path ?
    <link rel='stylesheet' href={path} key={i}/> :
    <style type={type} key={i} dangerouslySetInnerHTML={{
      __html: content
    }}/>;
}

/**
 * Global 'page' object used to render every page.
 */
export default class Page extends Component {

  static propTypes = {
    markup: PropTypes.string,
    scripts: PropTypes.array,
    styles: PropTypes.array,
    title: PropTypes.string,
    path: PropTypes.string
  }

  render() {
    const {
      markup = '',
      scripts = [],
      styles = [],
      title = '',
      path = '/'
    } = this.props;

    return <html>
      <head>
        <meta charSet='utf-8'/>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1'/>
        <meta name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1'/>
        <meta name='apple-mobile-web-app-capable' content='yes'/>

        <title>{title}</title>
        {styles.map(style)}
      </head>
      <body data-path={path}>
        <div id='content' dangerouslySetInnerHTML={{ __html: markup }}/>
        {scripts.map(script)}
      </body>
    </html>;
  }
}
