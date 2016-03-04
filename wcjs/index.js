process.env.path = `${process.env.path};${require('path').resolve(__dirname, 'libvlc')}`;

module.exports = require('./WebChimera.js.node');
