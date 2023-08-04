const robot = { //Object
    model: '1E78V2', // Property 1
    energyLevel: 100, // Property 2
    provideInfo() { // Method
      return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
    }
  };
  
  console.log(robot.provideInfo());
  
  // Prints: I am 1E78V2 and my current energy level is 100 