const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB connection
mongoose.connect(process.env.dburl);

app.use(express.json());

// Add routes here if needed
app.use((req, res, next) => {
  if (req.url.endsWith('.geojson')) {
    res.setHeader('Content-Type', 'application/json');
  }
  next();
});

const markerSchema = new mongoose.Schema({
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
});

const Marker = mongoose.model('Marker', markerSchema);

// Your routes here


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
