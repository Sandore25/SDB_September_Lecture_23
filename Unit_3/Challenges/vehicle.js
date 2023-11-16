/*
Part 1 
    - Create a class that is meant to create a vehicle.
        - Should have these keys:
            - make, model, no_wheels, color
        - Should have two methods
            - The first method will print (console log):
                "The [color] [make] [model] turns on its engine"
            - The second method will print (console log):
                "The [color] [make] [model] turns off its engine"
    - Create a vehicle using the class and "turn on" and "turn off" the vehicle.
    - Print (console log) the complete object created.
*/

/*  
    - Using the Vehicle Class
        - Update the Vehicle Class to include a new propter called "engine_on". Have it hold no value.
        - Update both methods to change the value of "engine_on" to either "true" if the vehicle is on or "false" if the vehicle is off.
    - Create a Sedan class that extends form the Vehicle class
        - The constructor will use all the values from the Vehicle class and add a "tank".
            - The "tank" will hold a numeric value (10-14 typically).
        - The Sedan class will need to have a factory method called "parkedCar". 
            - This will set the "engine_on" value to "false"
            - Create a new Sedan passing in the expected arguments.
                (make,model,no_wheels,color,tank)
        - This class will have a method called "drive" that accepts a parameter called "gallons".
            - This will need to evaluate:
                - Is the sedan on?
                    - If off, console.log "The [color] [model] needs to be turned on."
                    - If on,
                        - Does it have enough gas?
                            - If it does: console.log "You drive around and use up [gallons] gallons of gas.".
                                - adjust the number of gallons current in the tank.
                            - If it does not: console.log "There isn't enough gas in the [make] to drive that many miles."
*/
class Vehicle {
  constructor(make, model, no_wheels, color) {
      this.make= make;
      this.model = model;
      this.no_wheels = no_wheels;
      this.color = color;
      this.engine_on;
  }

  engineOn() {
    console.log(`The ${this.color} ${this.make} ${this.model} turn the engine on`)
    this.engine_on = true;
  }
  engineOff() {
    console.log(`The ${this.color} ${this.make} ${this.model} turn the engine off`)
    this.engine_on = false;
  }
}

let myVehicle = new Vehicle('Chevy', 'Trailblazer',4, 'black')
//myVehicle.engineOn();
//myVehicle.engineOff();
//console.log(myVehicle);

class Sedan extends Vehicle {
    static parkedCar(make, model,wheels,color,tank) {
        let engine_on = false;
        return new Sedan(
            make,model,wheels,color,engine_on,tank
        );
    }

    constructor(make, model, no_wheels, color, engine_on, tank){
        super(make,model,no_wheels,color,engine_on);
        this.tank = tank;
    }

    drive(gallons) {
        if(this.engine_on) {
            //console.log(`The ${this.color} ${this.model} is turned on.`)
            if(this.tank > gallons) {

                console.log(`You drive around and use up ${gallons} gallons of gas.`)
                this.tank -= gallons; 
            } else{
                console.log(`There isn't enough gas in the ${this.make} to drive that many miles.`)
            }
        }else {
            console.log(`The ${this.color} ${this.model} needs to be turned on.`)
        }
    }
}

const blueCivic = Sedan.parkedCar(
    'Honda', 'Civic', 4, 'blue', 12
);
blueCivic.drive(1);
blueCivic.engineOn();
blueCivic.drive(13);