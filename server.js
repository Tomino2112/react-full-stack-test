// Server
const axios = require('axios');
const express = require("express");
const app = express();
const port = 4000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/launches", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.spacexdata.com/v4/launches/query", 
      {
        query: {
          upcoming: false
        },
        options: {
          limit: 50,
          select: ["name", "details", "links.patch.small", "links.webcast"]
        }
      }
    );    
    res.send(response.data.docs);
  } catch(error) {
    res.status(500).send({
      message: `Something has gone wrong at SpaceX: ${error.response.data}`
    });
  }
  
  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
