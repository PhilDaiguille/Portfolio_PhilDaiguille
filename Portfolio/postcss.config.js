// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        '.*.html',
    ],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-loader'),
        require('cssnano'),
        purgecss,
    ],
}