To fire up the websocket server, first `cd` into this directory and type `npm install`. `npm install` will read the package.json file which is also in this directory and install all of the server's dependencies into a folder called `node_modules`. 

If you get a permissions error, try doing `sudo npm install` and it will ask you for your password and then install the package with root permissions. 

To fire up the server, run `node server.js`. The file server is running on port 8080, and the WebSocket server is running on port 8001. Make sure you're not using those ports with another server which is currently running, otherwise you'll also get an error. 

The WebSocket part of the server assigns a unique ID to everyone connected and sends JSON messages as strings. Because Websockets are only sending strings, you'll need to `JSON.stringify(msg)` your message before you send it and then when you receive the message, you'll have to `JSON.parse(msg)` on the other side. 

I've made three examples of communication paradigms: ManyToMany where everyone sends and receives messages from everyone else, ManyToOne where everyone sends messages and one person receives, and OneToMany where one person sends messages that everyone else receives. Each of these has a lot of interactive possibilities.