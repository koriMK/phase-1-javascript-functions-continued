// Saturday function with default activity
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Monday function with default activity 
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

// Wrapper function for adjectives
function wrapAdjective(flair = "*") {
  return function(adjective) {
    return `You are ${flair}${adjective}${flair}!`;
  }
}

// Calculator object
const Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
}

// Function to apply array of functions to a starting value
function actionApplyer(start, arr) {
  let result = start;
  for (let i = 0; i < arr.length; i++) {
    result = arr[i](result);
  }
  return result;
}