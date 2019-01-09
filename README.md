# Taxi24


Taxi24 is a server implementation built on top Node.js and Express.js with [sequelizejs](http://docs.sequelizejs.com/) for SQLITE integration. 


## Running Project

### Requirements


You need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.


### Installation

* Clone the repo: `git clone https://github.com/Niyitangasam/Taxi24.git`

* Install all dependencies: `npm install`

* Run `sequelize db:migrate` to create database and tables

* Now you can seed the database but follow below sequence because some data has references from other tables.
         
              1. Seed Locations table : sequelize db:seed --seed 20190107110338-seed-location
              2. Seed Drivers table : sequelize db:seed --seed 20190105153819-seed-driver
 
* Start the server: `node server.js` or `nodemon`


## Testing API

Testing API using [Postman](https://www.getpostman.com) and [Google Chrome](https://www.google.com/chrome/)

### Endpoints

Check the port that your sever is running  listen to but by default it will be `3000`
 1. To get a list of all drivers: `http://localhost:3000/api/drivers`.
 2. To get a list of all available drivers: `http://localhost:3000/api/drivers/available`.
 3. To get a list of all available drivers in 3 Km for specif location: `http://localhost:3000/api/drivers/availableNear/Nyamirambo`-replace Nyamirambo with any location.
 4. To get a driver bys specific id : `http://localhost:3000/api/drivers/5` - replace 5 with any id.
 5.To create a new trip: `http://localhost:3000/api/trips`
 6.To complete a trip: `http://localhost:3000/api/trips/complete/1` - replace 1 with any id of trip you want to complete
 7.To get a list of all active trip:`http://localhost:3000/api/trips/active`
 8.To get a list of all riders: `http://localhost:3000/api/riders/`
 9. To get a specif rider by ID: `http://localhost:3000/api/riders/1` - replace 1 with any id you want to access
 10. To get a list of closest riders: `http://localhost:3000/api/riders/Samuel` - replace Samuel with the name of rider
    
# Tests

`npm test`

# Author 

Created  by [Samuel NIYITANGA](https://github.com/Niyitangasam/) and still updating missing functionalities and fixing some bugs and [Docker](https://www.docker.com/community-edition) to be configured soon .
