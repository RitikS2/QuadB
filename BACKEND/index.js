const express = require("express");
const { connectToMongoDb } = require('./db')
const Ticker = require("./model");
var cors = require('cors')


const app = express();
connectToMongoDb("mongodb://127.0.0.1:27017/holdinfo")
.then(()=>{console.log("Connected to mongodb")});

const port = 5000;

app.use(cors())
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

app.get('/fetchdata', async (req, res) => {
    try {
      const response = await fetch('https://api.wazirx.com/api/v2/tickers');
      const tickers = await response.json();
  

      const tickersToStore = Object.values(tickers)
        .slice(0, 10)
        .map(({ name, last, buy, sell, volume, base_unit }) => ({
          name,
          last,
          buy,
          sell,
          volume,
          base_unit,
        }));
  
      await Ticker.insertMany(tickersToStore);
  
      res.json({ message: 'Data fetched and stored successfully.' });
    } catch (error) {
      console.error('Error fetching and storing data:', error);
      res.status(500).json({ error: 'An error occurred.' });
    }
  });
  

  app.get('/fetchticker', async (req,res) =>{
    try {
        const allticker = await Ticker.find({});
        res.json(allticker)
    } catch (error) { 
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})