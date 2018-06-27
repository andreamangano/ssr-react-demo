const express = require ('express');
const bodyParser = require('body-parser');
const app = express ();
require('dotenv').load();
const PORT = process.env.SERVER_PORT || 8000;

// App config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Api routes
const apiRoutes = require('./routes');

// app.use('/api', apiRoutes);
app.use(apiRoutes);

app.get('/', (req, res) => {
  res.send('Server is working...');
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}...`));