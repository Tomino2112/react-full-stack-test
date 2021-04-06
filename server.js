// Server
const axios = require('axios');
const express = require("express");
const app = express();
const port = 4000;

const handleApiError = (error, res) => {
  res.status(500).send({
    message: `Something has gone wrong at SpaceX: ${error.response.data}`
  });
};

app.use(function(req, res, next) {
  // @NOTE: Access control origin would be set appropriately on production product
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
    handleApiError(error, res);
  }
});

app.get("/rockets", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.spacexdata.com/v4/rockets/query", 
      {
        query: {},
        options: {
          select: ["name", "description", "cost_per_launch", "flickr_images"]
        }
      }
    );    

    const parsedData = response.data.docs.map(rocket => ({
      name: rocket.name,
      description: rocket.description,
      cost_per_launch: rocket.cost_per_launch.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      }),
      image: rocket.flickr_images && rocket.flickr_images.length ? rocket.flickr_images[0] : ''
    }));

    res.send(parsedData);
  } catch(error) {
    handleApiError(error, res);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
