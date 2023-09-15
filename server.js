import http from "http";
import fs from "fs";

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{

    if (req.method === 'GET' && req.url === '/'){
        //Serve the static html page
        fs.readFile('index.html', 'utf8', (err, data) =>{
            if (err){
                res.writeHead(500, {'content-type': 'text/plain'});
                res.end('Internal Server Error');
                return;
            }
            
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end(data);
        });
    } 
    
    else if (req.method === 'POST' && req.url === '/submit'){
        //handle POST request
        let body = '';
        
        req.on('end', () =>{
            body += chunck.toString();
        });

        req.on('end', () => {
            const message = decodeURIComponent(body.split('=')[1]);
            res.writeHead(200, {'content-type': 'text/html'});
            res.end('You submited the message: ${message}');
        });
    } 
    
    else{
        //Handle other request
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end('Not found')    
    }
});

server.listen(port, hostname, () =>{
    console.log('Server running at http://${hostname}:${port}/');
});

