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

  Park.prototype.dinosaurWithMostVisitors = function(){
      return this.dinosaur_collection.guestsAttractedPerDay.max();
  }

  Park.prototype.calculateNumOfVistorsPerDay = function(){
      let total = 0;

      for (const dinosaur of this.dinosaur_collection){
          total += dinosaur.guestsAttractedPerDay
      }
      return total

  }

  module.exports = Park;