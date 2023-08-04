const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() { // Getter Method
      if (typeof this._energyLevel === 'number') {
    // 'typeof operator' checks if energyLevel is a number
        return `My current energy level is ${this._energyLevel}`
      } else {
        return 'System malfunction: cannot retrieve energy level'
      }
    }
  };
  
  console.log(robot.energyLevel); // Calls Getter Method on Robot without '()'
  // Getter methods do not need to be called with a set of parentheses