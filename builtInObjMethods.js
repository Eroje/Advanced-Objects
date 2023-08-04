const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// Saves and return the robot keys (property names) in an array 
// Object.keys() --- Method
const robotKeys = Object.keys(robot);
console.log(robotKeys);

// Saves and return the robot keys-value pair in an array
// Object.entries() --- Method
const robotEntries = Object.entries(robot);
console.log(robotEntries);

// Creates a new robot with aditional properties
//Ogject.assign() --- Method
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