// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(42-blocks)
};

distanceFromHqInBlocks(13);

function distanceFromHqInFeet(blocks) {
    return Math.abs(42-blocks)*264
};

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination)*264
}

// function calculatesFarePrice(start, destination) {
//     let distance = math.abs(start - destination);
//     if (distance <= 400) {
//         let fare = 0
//         console.log('your ride is free!')
//         return fare;
//     }
//     else if (distance> 400 && distance < 2000) {
//         let fare = (distance - 400)* .02
//         console.log(`that will be ${fare}, please!`)
//         return fare
//     }
//     else if (distance > 2000 && distance <= 2500) {
//         let fare = 25
//         return fare
//     } 
//     else {
//         return 'cannot travel that far'; // Distance is over 2500 feet
//     }

function calculatesFarePrice(start, destination) {
    // Calculate the distance between start and destination
    const distance = distanceTravelledInFeet(start, destination)
  
    // Check if the distance is within the allowed range
    if (distance <= 400) {
      return 0; // Fare is free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      // Calculate the fare for distances between 400 and 2000 feet
      let fare = (distance - 400) * 0.02;
      return fare;
    } else if (distance > 2000 && distance <= 2500) {
      let fare = 25
        return fare; // Flat fare of $25 for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Distance is over 2500 feet
    }
  }


