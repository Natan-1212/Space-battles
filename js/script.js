////////////Pseudo Code/////////////

/*creating the USS Schartz ship object
    - hull: 20
    - firepower: 5
    - accuracy: .7
    - determine what methods are needed
    - method attack
        - 
- defining  the alien ship class
    - hull range
    - firepower range
    - accuracy
- create function that will build alien ships with randomly selected values
- create an array of alien ships
*********** create a game objeect that reflects the following ***********

// I know the below pseudo specifications requires an index and/or loop or multiple loops but i have been 
working on for long period of time but I found it hard to coordinate the actors with 
the action part of the game. I am still working and studying on it, though. 

1- start the game
1-1)When ussSpaceShip attack the first alien ship //// loop function 

 1-1-1)If the Alien ship being attacked survives, it attacks the ussSpaceShip back

 1-1-1)If the ussSpaceShip still survives the Alien attack, the ussSpaceShip attacks the ship again

 1-1-1)If Alien Ships survives, it attacks ussSpaceShip again

..it continues on the same fashion until next.....

 1-1-1)If the Alien Ship is attacked and destroyed => then next untill all of the Aliens
 ships are destroyed => success/true battle 
 1-1-1)If the ussSpaceShip retreats or got destroyed => Game over / unsuccessfull/false */

/////////////CODING///////////////

 //Defining Actors (i.e, ussSpaceShip and AlienShip)

 ///Creating the ussSpaceShip with object and attack function 

/*let ussSpaceShip = {
    name: "USS SpaceShip",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    attack: function() {
        let attackProbability = Math.random();
        if(attackProbability <= this.accuracy) {
            return true;
        }
        else {
            return false;
        }
    }
};

// Creating a class for the Alien ships
class AlienShip {
    constructor(name,hull,firePower,accuracy) {
        this.name = name;
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
    };
    attack() {
        let attackProbability= Math.random();
        if(attackProbability <= this.accuracy) {
            return true;
        }
        else {
            return false;
        }
    };
};

// Determining ranged properties of alien ships with arrays

let alienShips = [];                    // alien ships
let alienHullValues = [3,4,5,6];        // alien hull values(i.e,between 3 and 6)
let alienFirePowerValues = [2,3,4];     // alien fire power values(i.e, between 2 and 4)
let alienAccValues = [.6,.7,.8];        // alien accuracy values(i.e, between 0.6 and 0.8)

// function building  alien ships as per to the specifications 
let buildAlienShips = () => {           
    for(let i = 0;i < 6;i++) {               // as it was provided the number of Allien ships equals 6.
        let name = "Alien Ship "+ (i+1);
        let hull = alienHullValues[Math.floor(Math.random() * 4)];
        let firePower = alienFirePowerValues[Math.floor(Math.random() * 3)];
        let accuracy = alienAccValues[Math.floor(Math.random() * 3)];
        alienShips[i] = new AlienShip(name,hull,firePower,accuracy);
    }
}*/
/*As i had alredy reiterated in pseudo code section , i was unable to go further to produce 
a working game*/
