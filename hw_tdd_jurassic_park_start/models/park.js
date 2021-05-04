const Park = function (name, price) {
    this.name = name;
    this.price = price;
    this.dinosaur_collection = [];
  }

  Park.prototype.numberOfDinosaurs = function () {
      return this.dinosaur_collection.length;
  }
  
  Park.prototype.addDinosaur = function(dinosaur){
      this.dinosaur_collection.push(dinosaur)
  }

  module.exports = Park;