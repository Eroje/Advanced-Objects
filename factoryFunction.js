
const robotFactory = (model, mobile) => {
    return {
      model: model, // Key: Value Pair
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  };
  
  const tinCan = robotFactory('P-500', true);
  tinCan.beep(); 

  /* You should see 'Beep Boop' printed to the console 
  which means the factory function produced a robot object! 
  Play around with tinCan to check the other properties! */