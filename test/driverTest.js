const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

const should = chai.should();
const Driver = require('../models').Driver;

chai.use(chaiHttp);

describe('Driver API', () => {
  // Before each test we empty the database
  beforeEach((done) => {
    Driver.destroy({
      where: {},
      truncate: true,
    });
    done();
  });

  describe('/GET Drivers', () => {
    it('Getting all Drivers', (done) => {
      chai.request(app).get('/api/drivers').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
    });
  });
  describe('/GET/:id drivers', () => {
    it('Get Driver by id', (done) => {
      Driver.create({
        names: 'Niyitanga Sam',
        distance: 5,
        location: 'Kigali',
        available: false,
      }).then((driver) => {
        chai.request(app).get('/api/drivers/' + driver.id).end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
      });
    });
    it('Get Driver by invalid id', (done) => {
      chai.request(app).get('/api/drivers/kigali').end((err, res) => {
        res.should.have.status(400);
        res.body.should.equal('Invalid ID Given');
        done();
      });
    });
  });
});
