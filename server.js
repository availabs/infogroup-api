//Module dependencies

let express = require('express')

//Create server
var app = express();



//Router
app.get( '/', function( request, response ) {
    let helloWorld = `
        Welcome to InfoUSA data API.\n 
        Docmentation will go here.
    `
    response.send(helloWorld);
});
//Get a list of all books


//Start server
var port = 3001;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
}); 
