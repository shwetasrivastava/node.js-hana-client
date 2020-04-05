const app = require('./app');

const server = app.listen(process.env.PORT || 3000, function(){
    console.log("Listening to PORT " + server.address().port);
    console.log("Press CTRL+C to stop");
});

module.exports = server;