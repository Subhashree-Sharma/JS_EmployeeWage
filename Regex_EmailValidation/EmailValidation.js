//UC-05 - Final regex with optional TLD of exactly two characters
function validateEmail(email) {
  let emailRegex = /^abc([._+-]xyz)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
  return emailRegex.test(email);
}

// Test cases
console.log(validateEmail("abc@bridgelabz.co"));         
console.log(validateEmail("abc@bridgelabz.co.in"));     
console.log(validateEmail("abc.xyz@bridgelabz.co.us"));  
console.log(validateEmail("abc@bridgelabz.co.uk"));     
console.log(validateEmail("abcxyz@bridgelabz.co"));    
console.log("\n");  


//UC-04 - Optional part like xyz with valid special characters before it
function validateEmailUC4(email) {
  let emailRegex = /^abc([._+-]xyz)?@bridgelabz\.co(\.in)?$/;
  return emailRegex.test(email);
}

// Test cases
console.log(validateEmailUC4("abc@bridgelabz.co"));         
console.log(validateEmailUC4("abc.xyz@bridgelabz.co"));     
console.log(validateEmailUC4("abcxyz@bridgelabz.co"));       
console.log("\n");  


//UC-03 - RegexEmailValidation (@, "," & third part co is mandatory)
function validateEmailUC3(email) {
  let emailRegex = /^abc@bridgelabz\.co$/;
  return emailRegex.test(email);
}

// Test cases
console.log(validateEmailUC3("abc@bridgelabz.co"));   
console.log(validateEmailUC3("abc@xyz.co"));          
console.log(validateEmailUC3("abc@bridgelabzco"));    
console.log("\n");     



//UC-02 - RegexEmailValidation(@ is mandatory & valid domain part)
function validateEmailUC2(email) {
  let emailRegex = /^abc@bridgelabz\.[a-zA-Z]+$/;
  return emailRegex.test(email);
}

//Test cases
console.log(validateEmailUC2("abc@bridgelabz.co"));        
console.log(validateEmailUC2("abc@xyz.com"));               
console.log(validateEmailUC2("abc@bridgelabz"));     
console.log("\n");    

//UC-01 - RegexEmailValidation(initial regex)
function validateEmail(email) {
  let emailRegex = /^abc@[a-zA-Z]+\.[a-zA-Z]+$/;
  return emailRegex.test(email);
}

//Test cases           
console.log(validateEmail("xyz@bridgelabz.com"));    
console.log(validateEmail("abc@bridgelabz.co"));    
console.log(validateEmail("abc@.com"));              
