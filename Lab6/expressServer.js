import express from "express";

const app = express();
app.use(express.json());
const userData = [
    {
        id: 101,
        name: "Abhay",
        email: "abhay@123gmail.com",
    },
    {
        id: 102,
        name: "kumar",
        email: "kumar@123gmail.com",
    },
    {
        id: 103,
        name: "Abhishek",
        email: "abhishek@123gmail.com",
    },
];

const port = 3001;

app.get("/msg", (req, res) => {
    res.status(200).json({
        massage:"Welcome to epress server"
    });
});
app.get("/user", (req, res) => {
    try{
    res.status(200).json({
        massage:"Welcome to server"
    });
  }
  catch(error){
    console.log(`error found ${error}`);
    
  }
});
app.get("/registered", (req, res) => {

});

app.get("/msg1", (req, res) => {
    res.end(JSON.stringify(userData))
});
app.post("/creat",(req,res)=>{
    try{
        const{ name,email }=req.body;
        const newUser={
        id:userData.length+1,
        name,
        email,
        };
    userData.push(newUser);
    res.status(201).json({massage:"User created successfully",newUser});

    }catch(error){
      console.log("Error:",error.massgae);    
    }
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});