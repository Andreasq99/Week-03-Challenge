// Assignment Code
var generateBtn = document.querySelector("#generate");
var resetBtn = document.querySelector("#reset");
var spChars = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
var alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var Alph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var nums = ["0","1","2","3","4","5","6","7","8","9"];

var options = [0,false, false, false, false];

var lwrcs = document.querySelector("#lwrcs");
var uprcs = document.querySelector("#uprcs");
var nmbrs = document.querySelector("#nmbrs");
var spchrs = document.querySelector("#spchrs");

// Goes through the options for password length and characters. Returns an array; if the password length is too short it returns ["too short"], if it is too long then it returns ["too long"], else it returns an alphabet for the generator to use.
function passwordOptions(){
  options = [0, false, false, false, false];
  options[0] = window.prompt("Please enter the number of characters you would like your password to be. Enter a length between 8 and 128 characters.");
  if(options[0]<8){
    return ['short'];
  } else if (options[0]>128){
    return ["too long"];
  }
  var passwordAlphabet = [options[0]];
  
  options[1] = window.confirm("Do you want to use lowercase letters?");
  if(options[1]){
    passwordAlphabet = passwordAlphabet.concat(alph);
    console.log("alph");
    
    window.requestAnimationFrame( () => {
    lwrcs.innerHTML = '✅ Lowercase letters';
    } );
  }

  options[2] = window.confirm("Do you want to use uppercase letters?");
  if(options[2]){
    passwordAlphabet = passwordAlphabet.concat(Alph);
    setTimeout(uprcs.innerHTML = '✅ Uppercase letters', 100);
  }
  
  options[3] = window.confirm("Do you want to use numbers?");
  if(options[3]){
    passwordAlphabet = passwordAlphabet.concat(nums);
    setTimeout(nmbrs.innerHTML = '✅ Numbers', 100);
  }

  options[4] = window.confirm("Do you want to use special characters?");
  if(options[4]){
    passwordAlphabet = passwordAlphabet.concat(spChars);
    setTimeout(spchrs.innerHTML = '✅ Special characters', 100);
  }
  console.log(options);
  console.log(passwordAlphabet);
  return passwordAlphabet;
}

function generatePassword(){
  var passwordAlphabet = passwordOptions();
  var key = "";
  console.log(passwordAlphabet);
  if (passwordAlphabet[0] === 'short') {
    console.log("short");
    key =  "Password length is too short.";
  } else if (passwordAlphabet[0] === 'too long'){
    key = "Password length is too long.";
    console.log("long");
  } else {
    
    var length = passwordAlphabet.shift();
    console.log(passwordAlphabet);
    for(i=0;i<length;i++){
      var index = (Math.floor(Math.random()*passwordAlphabet.length));
      console.log(index);
      key = key.concat(passwordAlphabet[index]);
      console.log(key);
    }
    
  }
  console.log(key);
  return key;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 function resetPassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  lwrcs.innerHTML = "⬜ Lowercase letters";
  uprcs.innerHTML = "⬜ Uppercase letters";
  nmbrs.innerHTML = "⬜ Numbers";
  spchrs.innerHTML = "⬜ Special Characters";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
resetBtn.addEventListener("click", resetPassword);

