var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ port: 5656 });
wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        client.send(data);
    });
};
wss.on('connection',function(ws){
	ws.on('message',function(message){
		wss.broadcast(message);
	});
});
console.log("websocket on 5656");