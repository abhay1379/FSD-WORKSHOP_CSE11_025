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

app.get("/", (req, res) => {
    res.status(200).json({
        message:"Welcome to epress server"
    });
});
app.get("/user", (req, res) => {
    try{
    res.status(201).json({
        message : "Data recieved",
        data : userData,
    });
  }
  catch(error){
    console.log(`error found ${error}`);
  }
});
app.get("/user/:id", (req, res) => {
    try{
     const id=req.params.id;
     const user=userData.find((u) => u.id == id);
        if(!user){
            return res.status(400).json({
                massage:"user not found",
            });
        }
        res.status(200).json({
          message:"Data recieved",
          user,   
        });
  }
  catch(error){
    console.log("error",error.message);
  }
});
app.get("/registered", (req, res) => {
      try{
    res.status(202).json({
        message:"Welcome to server"
    });
  }
  catch(err){
    console.log("erroe found" , err.message);  
  }
});

app.get("/msg1", (req, res) => {
    res.end(JSON.stringify(userData))
});
app.post("/create",(req,res)=>{
    try{
        const { name,email } = req.body;
        const newUser={
        id: userData.length + 1,
        name,
        email,
        };
    userData.push(newUser);
    res.status(201).json({
        message:"User created successfully",
        newUser,
    });

    }catch(error){
      console.log("Error:",error.message);    
    }
});
app.put("/edit/:id",(req,res)=>{
    try{
        const id=req.params.id;
        const {name,email}=req.body;
        const index=userData.findIndex((u)=>u.id==id);
        if(index==-1){
            return res.status(400).json({
                message:"user not found",
            })
        }
            userData[index]={
                id,
                name,
                email,
        };
        return res.status(200).json({
            message:"user updated successfully",
        })
    }
    catch(error){
        console.log("Error",error.message);  
    }
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});