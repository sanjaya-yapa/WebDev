// Filename and the directory name is taken from the wrapper function parameters
console.log(__filename);
console.log(__dirname);

var url = "http://mylogger.io/log";

function log(message) {
    // Send an HTTP request
    console.log(message);
}

//this expors as an object
// module.exports.log = log;

// this exports as a function
module.exports = log;