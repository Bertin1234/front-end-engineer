// Loading the whole module
const os = require('os');
console.log(os.uptime());

// Loading the Module and extract certain functions via destructuring
const { uptime } = require('os');
console.log(uptime());
