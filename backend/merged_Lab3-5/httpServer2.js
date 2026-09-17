import http from "http";
import fs from "node:fs/promises";

let port = 3001;
const filePath = "file.txt";

let messages = [];

async function readFile() {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return data;
    } catch (err) {
        console.log("Error found", err);
    }
}

const content = await readFile();

console.log(content, "12");

const server = http.createServer((req, resp) => {
    const url = req.url;
    const typ = req.method;

    // GET /msg
    if (url === "/msg" && typ === "GET") {

        resp.statusCode = 200;
        resp.setHeader("Content-Type", "application/json");

        resp.end(JSON.stringify(content));
    }

    // GET /sis
    else if (url === "/sis" && typ === "GET") {

        resp.statusCode = 200;

        const userData = {
            name: "aarav",
            id: 1223
        };

        resp.write("OK sis open\n");
        resp.end(JSON.stringify(userData));
    }

    // POST /create
    else if (url === "/create" && typ === "POST") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {

            messages.push(body);

            resp.writeHead(201, {
                "Content-Type": "text/plain"
            });

            resp.end("Message created successfully\n");
        });
    }
    else if(url=="/create" && method=="POST"){
        let body="";
        req.on("data",(chuck)=>{
            body+=chuck;
        });
        req.on("end",()=>{
            const data=JSON.parse(body);
            const newUser={
              name:data.name,
            }
        });
    }
    // Unknown route
    else {
        resp.statusCode = 404;
        resp.end("Route not found");
    }
});

server.listen(port, () => {
    console.log(`Server is running ${port}`);
});

console.log(readFile());