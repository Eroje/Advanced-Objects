const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// Object.keys() Built-in Method
// Saves and return the robot keys (property names) in an array 
const robotKeys = Object.keys(robot);
console.log(robotKeys);

// Object.entries() Built-in Method
// Saves and return the robot keys-value pair in an array
const robotEntries = Object.entries(robot);
console.log(robotEntries);

//Ogject.assign() Built-in Method
// Creates a new robot with aditional properties
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);

/* Prints: 

[ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

[ [ 'model', 'SAL-1000' ],
  [ 'mobile', true ],
  [ 'sentient', false ],
  [ 'armor', 'Steel-plated' ],
  [ 'energyLevel', 75 ] ]

{ laserBlaster: true,
  voiceRecognition: true,
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75 } */