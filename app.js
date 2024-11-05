
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const urlRoutes = require('./routes/urlRoutes');

const app = express();
const PORT = 3000;

connectDB();

app.use(bodyParser.json());


app.use('/api/urls', urlRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
