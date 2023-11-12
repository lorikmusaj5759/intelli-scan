/* SophisticatedCode.js */

// This code is a simulation of a virtual pet game called "Digital Creature"
// It allows users to create and interact with virtual creatures in a complex virtual world.

// Define the VirtualCreature class
class VirtualCreature {
  constructor(name, species, color) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.energy = 100;
    this.happiness = 100;
    this.age = 0;
    this.isAlive = true;
  }

  eat(food) {
    if (this.isAlive) {
      this.energy += food.energy;
      console.log(`${this.name} is eating ${food.name} and gaining energy.`);
    } else {
      console.log(`${this.name} cannot eat, it's gone.`)
    }
  }

  play(time) {
    if (this.isAlive) {
      this.energy -= time;
      this.happiness += time;
      console.log(`${this.name} is playing and increasing its happiness.`);
    } else {
      console.log(`${this.name} cannot play, it's no longer with us.`);
    }
  }

  sleep(hours) {
    if (this.isAlive) {
      this.energy += hours * 2;
      console.log(`${this.name} is sleeping and regaining energy.`);
    } else {
      console.log(`${this.name} cannot sleep, it's already gone.`);
    }
  }
  
  checkStatus() {
    if (this.isAlive) {
      console.log(`${this.name}'s status: energy=${this.energy}, happiness=${this.happiness}, age=${this.age}`);
    } else {
      console.log(`${this.name} is gone, but will never be forgotten.`);
    }
  }

  static createRandomCreature() {
    const species = getRandomElement(["dragon", "unicorn", "griffin", "phoenix"]);
    const color = getRandomElement(["red", "blue", "green", "purple", "pink"]);
    const name = getRandomName();
    return new VirtualCreature(name, species, color);
  }
}

// Define the Food class
class Food {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
}

// Helper function to get a random element from an array
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Helper function to get a random name
function getRandomName() {
  const names = ["Charlie", "Max", "Bella", "Lucy", "Oliver", "Luna"];
  return getRandomElement(names);
}

// Create some food items
const apple = new Food("Apple", 10);
const banana = new Food("Banana", 15);
const carrot = new Food("Carrot", 8);

// Create some virtual creatures
const creature1 = new VirtualCreature("Fluffy", "unicorn", "pink");
const creature2 = new VirtualCreature("Spike", "dragon", "green");
const creature3 = new VirtualCreature("Fang", "griffin", "purple");

// Interact with the creatures
creature1.eat(apple);
creature2.play(3);
creature3.sleep(5);

// Create a random creature and check its status
const randomCreature = VirtualCreature.createRandomCreature();
randomCreature.checkStatus();