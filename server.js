//Module dependencies

let express = require('express')
let byZip = require('./controllers/byZip')
let byId = require('./controllers/byId')

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

app.get( '/byzip/:zipcode', function( request, response ) {
    if(!request.params.zipcode) {
        response.status(400)
        .json({
          status: 'Error',
          responseText: 'No zipcide specified'
        })
    }

    byZip(request.params.zipcode)
        .catch(function (err) {
            return next(err);
        })
        .then(data => {
            response.status(200)
            .json({
              data: data,
            })
        })
    
});

app.get( '/byid/:id', function( request, response ) {
    if(!request.params.id) {
        response.status(400)
        .json({
          status: 'Error',
          responseText: 'No id'
        })
    }

    byId(request.params.id)
        .catch(function (err) {
            return next(err);
        })
        .then(data => {
            response.status(200)
            .json({
              data: data,
            })
        })
    
});

//Start server
var port = 3001;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
}); 
