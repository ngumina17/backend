const should = require('chai').should
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:4000')

describe("GET /paris", function () {
    it('should return a 200 response', function (done) {
        api
        .get("/Paris")
        .set("Accept", "applicaton/json")
        .expect(200, done)
    });

    it('should return an array', function(done) {
        api.get('/Paris')
        .set('Accept', 'application/json')
        .end(function(error, response) {
            expect(response.body).to.be.an('array')
            done()
        })
    })
    it("should return an array of objects that have a field called 'idea' ", function(done){
        api
          .get("/Paris")
          .set("Accept", "application/json")
          .end(function(error, response){
            expect(response.body[0]).to.have.property('idea');
            done()
        })
      })
    })

    describe('POST /Paris', function () {
        before(function(done){
            api.post('/Paris')
            .set('Accept', 'application/json')
            .send({
                "idea": "Visit Catacombs",
                "favorited": false,
            })
            .end(done)
        })
        
    
        it("should add a idea object to the collection Paris and return it", function (done) {
            api
              .get("/Paris")
              .set("Accept", "application/json")
              .end(function(error, response){
                expect(response.body.length).to.equal(7);
                done()
              })
          })
    })


    describe('DELETE /Paris/:id',  () => {
      
        let previousLength
        let idToDelete
      
        before( done => {
          api
            .get('/Paris')       
            .set('Accept', 'application/json')       
            .end( (error, response) =>  {
              previousLength = response.body.length       
              idToDelete = response.body[0]._id     
              done()       
            })
        })
      
        before(done => {
            // console.log(idToDelete)
          api.delete(`/Paris/${idToDelete}`)
             .set('Accept', 'application/json')
             .end( (error, response) => {
               done()
             })
        })
      
        it('deletes an idea by id',  done => {
          api.get('/Paris')
             .set('Accept', 'application/json')
             .end( (error, response) => {
               expect(response.body.length).to.equal(previousLength - 1)
               expect(response.body.find((ideas) => ideas.id == idToDelete)).to.equal(undefined)
               done()
             })
        })
      })

      describe('PUT /Paris/:id',  () => {

        let ideaToUpdate
      
        before( done => {
          api.get('/Paris')
             .set('Accept', 'application/json')
             .end( (error, response) => {
               ideaToUpdate = response.body[0]
               console.log(ideaToUpdate._id)
               done()
             })
        })
        before( done => {
          api
            .put(`/Paris/${ideaToUpdate._id}`)
            .set('Accept', 'application/json')
            .send({
            //   '_id': ideaToUpdate._id,
              'idea': 'Drink Beer',
              'favorited': false,
            })
            .end( (error, response) => {
                console.log(response.body)
              done()
            })
        })
        it('can update an idea by id',  done => {
            // console.log(idea)
          api
            .get(`/Paris/${ideaToUpdate._id}`)      
            .set('Accept', 'application/json')  
            .end( (error, response) => { 
                console.log(response.body) 
            expect(response.body[0].idea).to.equal('Drink Beer')
                
              done()       
            })
      })
      
      })
      
     