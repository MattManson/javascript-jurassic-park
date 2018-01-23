const assert = require('assert');
const Dinosaur = require('../Dinosaur.js');
const Park = require('../Park.js');

describe('Park', function(){
  let park;
  let trex;
  let velociraptor;
  let velociraptor2;
  let utahraptor;
  let allosaur;
})

beforeEach(function(){
  park = new Park("Jurassic Park");
  trex = new Dinosaur("T-Rex", 1);
  velociraptor = new Dinosaur("Velociraptor", 2);
  utahraptor = new Dinosaur("Utahraptor", 3);
  velociraptor2 = new Dinosaur("Velociraptor", 2);
  allosaur = new Dinosaur("Allosaur", 1);

  park.addDino(trex);
  park.addDino(velociraptor);
  park.addDino(velociraptor2);
  park.addDino(utahraptor);
  park.addDino(allosaur);
})

it('can add dinosaur to park', function(){
  assert.strictEqual(park.dinosaurs.length, 5);
})

it('can remove dinosaur by type', function(){
  park.removeByType("Velociraptor")
  assert.strictEqual(park.dinosaurs.length, 3);
})
