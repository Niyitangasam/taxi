
[![Build Status](https://travis-ci.org/Niyitangasam/Taxi24.svg?branch=master)](https://travis-ci.org/Niyitangasam/Taxi24)
	
# Taxi24



Taxi24 is a server implementation built on top Node.js and Express.js with [sequelizejs](http://docs.sequelizejs.com/) AS ORM for  PostgreSQL. 


## Running Project

### Requirements


You need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.
You will also need postgresql as database [PostgreSQL](https://www.postgresql.org/)


### Installation

* Clone the repo: `git clone https://github.com/Niyitangasam/Taxi24.git`

* Install all dependencies: `npm install`

* we are using postgresql - Refer to .env.sample and create .env file and to fill your environment variables
* Run `sequelize db:migrate` to create database and tables

* Now you can seed the database but follow below sequence because some data has references from other tables.
         
              1. Seed Locations table : sequelize db:seed --seed 20190107110338-seed-location
              2. Seed Drivers table : sequelize db:seed --seed 20190105153819-seed-driver
 
* Start the server: `npm run start:dev` on developmeent or `npm run start` when deployed on production server.


## Testing API

Testing API using [Postman](https://www.getpostman.com) and [Google Chrome](https://www.google.com/chrome/)

### Endpoints

Check the port that your sever is running  listen to but by default it will be `3000`
``You may also need to replace http://localhost with your own domain``

 ###  To get a list of all drivers
  `http://localhost:3000/api/drivers`.
 ###  To get a list of all available drivers
  `http://localhost:3000/api/drivers/available`.
 ###  To get a list of all available drivers in 3 Km for specif location
  `http://localhost:3000/api/drivers/availableNear/Nyamirambo`-replace Nyamirambo with any location.
 ###  To get a driver bys specific id 
  `http://localhost:3000/api/drivers/5` - replace 5 with any id.
 ###  To create a new trip
 `http://localhost:3000/api/trips`
 ###  To complete a trip
  `http://localhost:3000/api/trips/complete/1` - replace 1 with any id of trip you want to complete
 ###  To get a list of all active trip
 `http://localhost:3000/api/trips/active`
 ###  To get a list of all riders
  `http://localhost:3000/api/riders/`
 ### To get a specif rider by ID
  `http://localhost:3000/api/riders/1` - replace 1 with any id you want to access
 ###  To get a list of closest riders
  `http://localhost:3000/api/riders/Samuel` - replace Samuel with the name of rider
    
# Tests

`npm test`

# Author 

Created  by [Samuel NIYITANGA](https://github.com/Niyitangasam/) and still updating missing functionalities and fixing some bugs and [Docker](https://www.docker.com/community-edition) to be configured soon .
