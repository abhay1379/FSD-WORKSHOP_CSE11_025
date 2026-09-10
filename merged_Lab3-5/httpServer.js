import http from "http"
const port=3000;
const server=http.createServer((req,resp)=>{
   const url=req.url;
   const method=req.method;
   if(url=="/msg" && method=="GET");
   resp.write("Hello World!");
   resp.end();
});

server.listen(port,()=>{
    console.log(`Server is running ${port}`);
    
});