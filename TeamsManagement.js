const express = require("express");
const app = express();
const PORT = 8000;
app.use(express.json());
const teams = [
    {
        "id":1,
        "nom":"Barcalone",
        "country": "Spain"
    },
    {
        "id":2,
        "nom":"Madrid",
        "country": "Spain"
    },
    {
        "id":3,
        "nom":"PSG",
        "country": "Spain"
    },
    {
        "id":4,
        "nom":"LivrePooole",
        "country": "Spain"
    },
    {
        "id":5,
        "nom":"Marseillle",
        "country": "Spain"
    },
    {
        "id":6,
        "nom":"Real Madrid",
        "country": "Spain"
    }
];


// for gettig the data 
app.get("/teams" ,(req,res)=>{
    try{
        teams ?  res.status(200).send(teams) : res.status(400).send("no data valid")
       
    }
    catch(error){
        console.log(error)
    }
})

// for getting a specific team with his id :
app.get("/teams/:id" ,(req,res)=>{
    try{
        const id = parseInt(req.params.id);
        let team = teams.find(team=>team.id === id)
        team ?  res.status(200).send(team) : res.status(400).send("no data valid")
       
    }
    catch(error){
        console.log(error)
    }
})
// for adding  a new team in the exsiting teams :

app.post("/teams" ,(req,res)=>{
    const TeamsToBeAdded = req.body
    if(!TeamsToBeAdded) res.status(400).send("No data sended");
    try{
        teams.push(TeamsToBeAdded);
        teams ?  res.status(200).send(teams) : res.status(400).send("no data valid")
       
    }
    catch(error){
        console.log(error)
    }
})

// for deleting  a specific team in the exsiting teams :
app.delete("/teams/:id" ,(req,res)=>{
        const id = parseInt(req.params.id);
        const team = teams.find(team => team.id === id)
    if(!team) res.status(400).send("No team found");
    try{
        teams.splice(teams.indexOf(team),1)
        res.status(200).send(teams)
        }
    catch(error){
        console.log(error)
    }
})


app.listen(PORT,()=>{
    console.log("the app is runing on the port" , PORT)
})