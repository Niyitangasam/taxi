const express = require('express');
const bodyParser = require('body-parser');
const driversRoutes = require('./routes/driversRoutes');
const tripsRoutes = require('./routes/tripsRoutes');
const ridersRoutes = require('./routes/ridersRoutes');


const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// PORT
const port = process.env.PORT || 3000;
app.use('/api/drivers', driversRoutes);
app.use('/api/trips', tripsRoutes);
app.use('/api/riders', ridersRoutes);
app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;
