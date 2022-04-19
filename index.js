
// YOUR CODE HERE
class Car{
  constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk(){
    console.log("BEEP BEEP!")
  }

  performMaintenance(){
    setTimeout(()=>{
      console.log("Maintenance complete")
    }, 3000)
  }
}

let mySweetRide = new Car("Pontiac", "Fiero", 1988)

mySweetRide.honk()
mySweetRide.performMaintenance()
