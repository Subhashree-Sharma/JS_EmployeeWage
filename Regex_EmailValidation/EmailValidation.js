function validateEmail(email) {
  let emailRegex = /^abc@[a-zA-Z]+\.[a-zA-Z]+$/;
  return emailRegex.test(email);
}

//Test cases
console.log(validateEmail("abc@bridgelabz.co"));       
console.log(validateEmail("abc@bridgelabz.com"));      
console.log(validateEmail("xyz@bridgelabz.com"));      
console.log(validateEmail("abc.xyz@bridgelabz.com")); 
console.log(validateEmail("abc@.com"));              
