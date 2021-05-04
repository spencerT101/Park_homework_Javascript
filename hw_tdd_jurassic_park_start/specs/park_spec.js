const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');
const { lstat } = require('fs');

describe('Park', function() {
  let park;

  beforeEach(function () {
    park_1 = new Park('Jurassic Park','£50') 
  })

  it('should have a name', function(){
    const actual = park_1.name
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function () {
    const actual = park_1.price
    assert.strictEqual(actual, '£50')
  });
  
  describe('dinosaur_collection', function(){

    let dinosaur;

    beforeEach(function () {
      dinosaur_1 = new Dinosaur('t-rex', 'carnivore', 50) 
    })

    it('should have a collection of dinosaurs', function (){
      const actual = park_1.dinosaur_collection
      assert.deepStrictEqual(actual, [])
  });
  
    it('should be able to add a dinosaur to its collection', function(){
      park_1.addDinosaur(dinosaur_1);
      const actual = park_1.numberOfDinosaurs();
      assert.strictEqual(actual, 1);
    });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

  })
});
