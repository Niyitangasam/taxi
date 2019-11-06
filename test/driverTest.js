import chai from 'chai';
import chaiHttp from 'chai-http';
import model from '../models';
import app from '../server';

const should = chai.should();
const { Driver } = model;

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

  describe('/GET/:id drivers', () => {
    it('Get Driver by invalid id', (done) => {
      chai.request(app).get('/api/drivers/kigali').end((err, res) => {
        res.should.have.status(404);
        done();
      });
    });
  });
});
