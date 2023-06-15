// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
  const headquarters = 42;
  return Math.abs(pickupLocation - headquarters);
}

// Returns the number of feet from Scuber's headquarters to the pickup location
function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * 264;
}

// Calculates the number of feet a passenger travels given a starting block and an ending block
function distanceTravelledInFeet(startBlock, endBlock) {
  const blocks = Math.abs(startBlock - endBlock);
  return blocks * 264;
}

// Calculates the fare for the customer based on the distance traveled
function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}