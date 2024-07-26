function hasTargetSum(array, target) {
  
    // look through each item in the array
    for (let i = 0; i < array.length; i++) {
      // look through the rest of the array
      for (let j = i + 1; j < array.length; j++) {
        // check if you add the items in the array do they equal target
        if (array[i] + array[j] === target) {
          return true;
        }
        
      }
    }
    return false;
  }


/* 
  //O(n2)
*/

/* 
  Search through the items of the array to find your first item. 
  Search through the items of the array to find your second item. 
  Add items together to see if their sum equal the target number and return true if they do.
  Return False if they dont. 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
