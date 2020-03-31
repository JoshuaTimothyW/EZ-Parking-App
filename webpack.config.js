const path = require("path")

module.exports = {
    entry: './assets/js/park.js',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    watch: true,
};