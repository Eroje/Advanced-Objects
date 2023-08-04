const robot = {
    _energyLevel: 100, // energyLevel shd not be altered
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
  robot._energyLevel = 'high' // reassigns energyLevel
  robot.recharge();
  
  