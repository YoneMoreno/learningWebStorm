"use strict";

var http = require("http");

var server = http.createServer(function (req, res) {
    res.write("<html>\n<body><h1>Hello from Webstorm</h1></body>\n</html>");
    res.end();
});

server.listen(3000);
//# sourceMappingURL=server.js.map