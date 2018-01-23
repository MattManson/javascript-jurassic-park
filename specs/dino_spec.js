const assert = require('assert');
const Dinosaur = require('../Dinosaur.js');

describe('Dinosaur', function(){
  let trex;
  let velociraptor;

  beforeEach(function(){
    trex = new Dinosaur("T-Rex", 1);
    velociraptor = new Dinosaur("Velociraptor", 2);
  })

  it('can see offspringAmount', function(){
    assert.strictEqual(trex.offspring, 1);
    assert.strictEqual(velociraptor.offspring, 2);
  })

})
