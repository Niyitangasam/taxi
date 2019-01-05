const express = require('express');
const bodyParser = require('body-parser');
const driversRoutes = require('./routes/driversRoutes');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// PORT
const port = process.env.PORT || 3000;
app.use('/api/drivers', driversRoutes);
app.listen(port, () => console.log(`listening on port ${port}`));
