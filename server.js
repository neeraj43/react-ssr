require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  extensions: ['.js', '.jsx'], // important for JSX support
});

const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('react');
const { renderToString } = require('react-dom/server');

// Dynamically require JSX file
const App = require('./src/App').default;

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const appHtml = renderToString(<App/>);
    console.log('jhgjhghj')
  fs.readFile('./public/index.html', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading index.html');
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`));
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
