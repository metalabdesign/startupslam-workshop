
export default function collect(root, stats) {
  const base = root.charAt(root.length) !== '/' ? `${root}/` : root;

  // Order the chunks so commons chunks come first.
  const files = stats.chunks
    .slice()
    .sort((a, b) => a.entry === b.entry ? b.id - a.id : b.entry - a.entry)
    .reduce((list, chunk) => list.concat(chunk.files), []);

  const result = {
    scripts: [],
    styles: []
  };

  files.forEach(file => {
    const path = base + file;
    if (/\.js$/.test(file)) {
      result.scripts.push({
        type: 'text/javascript',
        path
      });
    } else if (/\.css$/.test(file)) {
      result.styles.push({
        type: 'text/css',
        path
      });
    }
  });

  return result;
}
