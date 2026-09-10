import http from "http";

let userData = [
    {
        id: 1,
        name: "Abhay",
        email: "abhay@gmail.com"
    }
];

const server = http.createServer(async (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === "/users" && method === "GET") {

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(userData));
    }

    else if (url === "/create" && method === "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            try {
                const data = JSON.parse(body);

                const newUser = {
                    id: data.id,
                    name: data.name,
                    email: data.email
                };

                userData.push(newUser);

                res.statusCode = 201;
                res.setHeader("Content-Type", "application/json");

                res.end(JSON.stringify({
                    message: "User created successfully",
                    user: newUser
                }));

            } catch (error) {
                res.statusCode = 400;
                res.end("Invalid JSON");
            }
        });
    }else if(url.startsWith("/delete/") && method=="DELETE"){
        const id=url.split("/")[2];
        const index=userData.findIndex((u)=> u.id==id);
        if(index==-1){
            return res.end("element not found");
        }
        userData.splice(index,1);
        res.end("user delete successfully");
    }
    else {
        res.statusCode = 404;
        res.end("Route not found");
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});