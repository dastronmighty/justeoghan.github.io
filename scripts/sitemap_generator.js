// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define your base URL
const hostname = 'https://eoghanhogan.ie';

// Create a sitemap instance
const smStream = new SitemapStream({ hostname });

// Define your static and dynamic routes
const staticRoutes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/blog', changefreq: 'daily', priority: 0.8 },
];

// Dynamic blog routes, you can pull these from your blog data
const blogRoutes = [
    { url: '/blog/my-first-blog-post', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/react-tips-tricks', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/test-blog', changefreq: 'monthly', priority: 0.7 },
];

// Add static and dynamic routes to the sitemap
staticRoutes.concat(blogRoutes).forEach(route => {
    smStream.write(route);
});

// End the stream
smStream.end();

// Save the sitemap to the public directory
streamToPromise(smStream)
    .then(data => {
        const dest = path.resolve('./public', 'sitemap.xml');
        createWriteStream(dest).write(data.toString());
        console.log('Sitemap created at:', dest);
    })
    .catch(err => {
        console.error('Error generating sitemap:', err);
    });
