const Dinosaur = require('./Dinosaur.js');

const Park = function(name){
  this.name = name;
  this.dinosaurs = [];
}

Park.prototype.addDino = function(dino){
  this.dinosaurs.push(dino);
}

Park.prototype.removeByType = function(type){
  this.dinosaurs = this.dinosaurs.filter(dino => dino.type != type);
  // for(let dino of this.dinosaurs){
  //   if(dino.type === type){
  //     index = this.dinosaurs.indexOf(dino);
  //     this.dinosaurs.splice(index, 1);
  //   }
  // }
}



module.exports = Park;
