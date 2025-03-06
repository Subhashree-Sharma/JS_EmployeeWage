//UC-03 - No extra characters (like alphabets or special characters) at the end
function validatePinCodeUC3(pin) {
  let pinRegex = /^[1-9][0-9]{5}$/;
  return pinRegex.test(pin);
}

// Test cases
console.log(validatePinCodeUC3("400088"));  
console.log(validatePinCodeUC3("400088B"));
console.log(validatePinCodeUC3("400088#")); 
console.log("\n");

//UC-02 Starts with digit 1-9
function validatePinCodeUC2(pin) {
  let pinRegex = /^[1-9][0-9]{5}$/;
  return pinRegex.test(pin);
}

// Test cases
console.log(validatePinCodeUC2("400088")); 
console.log(validatePinCodeUC2("A400088")); 
console.log(validatePinCodeUC2("12345"));   
console.log("\n");

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