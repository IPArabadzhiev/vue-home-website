// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var appDir = path.resolve( __dirname, "dist" );
app = express();
app.use(express.static(appDir));
app.get( "*", function( req, res ) {
    res.sendFile( path.resolve( appDir, "index.html" ) );
} );
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
