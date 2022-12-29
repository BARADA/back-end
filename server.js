const http = require('http');
const serverHandler = (request, response) => {
    switch (request.url) {
        case '/students':
            response.write("STUDENTS");
            break;
        default:
            response.write("<h1>404 Not Found</h1>");
    }
    setTimeout(() => {
        response.end();
    }, 3000);
}

const server = http.createServer(serverHandler);
server.listen(3003);

