const express = require('express');

const app = express();

require('./routes/driversRoutes')(app);
require('./routes/tripsRoutes')(app);

console.log('in server.js');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on Port', PORT);
});
