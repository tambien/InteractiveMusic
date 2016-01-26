var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);

var WebSocketServer = require("ws").Server;

var wss = new WebSocketServer({ port: 8001 });

//a list of all the connections
var connections = [];

var connectionIDs = 0;

//connections
wss.on("connection", function(ws) {

	//push it on initially
	connections.push(ws);

    ws.on("message", function(message) {
        //send it to the rest of the connectsions
        for (var i = 0 ; i < connections.length; i++){
        	if (connections[i] !== ws){
        		connections[i].send(message);
        	}
        }
    });

    ws.on("close", function() {
        var i;
    	for (i = 0; i < connections.length; i++){
    		if (connections[i] === ws){
        		connections.splice(i, 1);
        		break;
        	}
    	}
        //send a close message to the rest of the connections
        for (i = 0 ; i < connections.length; i++){
            if (connections[i] !== ws){
                connections[i].send(JSON.stringify({
                    "type" : "close",
                    "id" : ws.id
                }));
            }
        }
    });

    ws.id = connectionIDs++;

    //let the connector know their id
    ws.send(JSON.stringify({
    	"type" : "self",
    	"id" : ws.id
    }));

    //send an open message to everyone else
    for (i = 0 ; i < connections.length; i++){
        if (connections[i] !== ws){
            connections[i].send(JSON.stringify({
                "type" : "open",
                "id" : ws.id
            }));
        }
    }
});