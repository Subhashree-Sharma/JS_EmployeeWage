//UC-03 - RegexEmailValidation (@, "," & third part co is mandatory)
function validateEmail(email) {
  let emailRegex = /^abc@bridgelabz\.co$/;
  return emailRegex.test(email);
}

// Test cases
console.log(validateEmail("abc@bridgelabz.co"));   
console.log(validateEmail("abc@xyz.co"));          
console.log(validateEmail("abc@bridgelabzco"));    
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
