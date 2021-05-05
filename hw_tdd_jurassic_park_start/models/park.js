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
    //   set it to up the first dino in the array with most visitors
      let dinosaurWithMostVisitors = this.dinosaur_collection[0];

// create a for loop to go through the array and check the number of visitors against the first dino.
// when a dino with more visitors is found it becomes the dino with most visitors until another one is found.
// It keeps doing this until it has worked through the array.
      for (const dinosaur of this.dinosaur_collection){
          if(dinosaur.guestsAttractedPerDay > dinosaurWithMostVisitors.guestsAttractedPerDay){
              dinosaurWithMostVisitors = dinosaur;
          }
      }
      return dinosaurWithMostVisitors
  }
  Park.prototype.dinosaurSpecies = function(species){
      let dinosaur_list = [];
      for (dinosaur of this.dinosaur_collection){
          if (dinosaur.species === species){
              dinosaur_list.push(dinosaur)
          }
      }
      return dinosaur_list
  }

  Park.prototype.calculateNumOfVistorsPerDay = function(){
      let total = 0;

      for (const dinosaur of this.dinosaur_collection){
          total += dinosaur.guestsAttractedPerDay
      }
      return total

  }
  Park.prototype.calculateNumOfVistorsPerYear  = function(){

    let total = 0

    for (const dinosaur of this.dinosaur_collection){
        total += dinosaur.guestsAttractedPerDay * 365

    }
    
    return total
  }

  Park.prototype.calculateRevenuePerYear  = function(){
    
    return this.price * this.calculateNumOfVistorsPerYear();
    
    // guestsPerYear = this.calculateNumOfVistorsPerYear
    // revenuePerYear = guestsPerYear * this.price
    // return revenuePerYear
    
    
}


  module.exports = Park;