function generateRandomNumberWithDelay(delayInSeconds) {
    let remainingTime = delayInSeconds;
    let intervalId;
  
    const progressInterval = setInterval(() => {
      remainingTime--;
      console.log(`Time remaining: ${remainingTime} seconds...`);
      if (remainingTime === 0) {
        clearInterval(progressInterval);
        clearInterval(intervalId);
        const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 100
        console.log(`Random number generated: ${randomNumber}`);
      }
    }, 1000);
  
    intervalId = setTimeout(() => {
      clearTimeout(intervalId);
    }, delayInSeconds * 1000);
  }
  
  // Usage
  generateRandomNumberWithDelay(3);
  