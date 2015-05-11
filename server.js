var server = require('./');
var port = process.env.PORT || 3000;
server.listen(port);
console.log('~>', port);
