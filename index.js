// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    //returns the number of blocks given a value
    return Math.abs(42 - pickupLocation);
  }


function distanceFromHqInFeet(someValue) {
    return 264 * distanceFromHqInBlocks(someValue);
      
}


  function distanceTravelledInFeet(feet1, feet2) {
    //returns the number of feet traveled
      return Math.abs(feet1 - feet2) * 264;
  }

  function calculatesFarePrice(feet1, feet2) {
    //returns the fare for the customer
      let distanceInFeet = distanceTravelledInFeet(feet1, feet2);
      let fare;
      if (distanceInFeet >= 400 && distanceInFeet >= 2500)
      {
          fare = 25;
          return fare;
      }
      else if (distanceInFeet > 2500)
      {
          fare = "cannot travel that far";
      }
      return fare;
  }