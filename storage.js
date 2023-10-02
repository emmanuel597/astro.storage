// storage.js

// Initialize an empty object to store variables
const storedVariables = {};

// Function to set a variable
function setVariable(key, value) {
  storedVariables[key] = value;
}

// Function to get a variable
function getVariable(key) {
  return storedVariables[key];
}

// Export the set and get functions for external use
module.exports = {
  setVariable,
  getVariable,
};
