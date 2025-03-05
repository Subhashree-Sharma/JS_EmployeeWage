//UC-02 Starts with digit 1-9
function validatePinCode(pin) {
  let pinRegex = /^[1-9][0-9]{5}$/;
  return pinRegex.test(pin);
}

// Test cases
console.log(validatePinCode("400088")); 
console.log(validatePinCode("A400088")); 
console.log(validatePinCode("12345"));   


//UC-01 Regex pattern to validate a 6-digit Indian PIN code
function validatePinCode(pin) {
  let pinRegex = /^[1-9][0-9]{5}$/;
  return pinRegex.test(pin);
}

// Test cases
console.log(validatePinCode("400088"));
console.log(validatePinCode("000088")); 
console.log(validatePinCode("40-088"));  
console.log("\n");