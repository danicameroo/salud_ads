const express = require('express');
const { renderToNodeStream } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { matchRoutes } = require('react-router-config');
const { SitemapStream, streamToPromise } = require('sitemap');
const routes = require('./src/routes');

const app = express();

app.get('/sitemap.xml', (req, res) => {

});

app.listen(3000, () => console.log('Server started on port 3000'));