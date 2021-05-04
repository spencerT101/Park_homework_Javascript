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

  Park.prototype.removeDinosaur = function(dinosaur){
      const indexOfDinosaur = this.dinosaur_collection.indexOf(dinosaur)
      this.dinosaur_collection.splice(indexOfDinosaur, 1);
  }

  module.exports = Park;