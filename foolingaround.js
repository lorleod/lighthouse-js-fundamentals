const urlEncode = function(text) {
  let trimmedText = text.trim();
  let encodedText = "";
  for (let i = 0; i < trimmedText.length; i++) {
    if (trimmedText[i] != " ") {
      encodedText = encodedText.concat(trimmedText[i]);
    } else if (trimmedText[i] === " ") {
      encodedText = encodedText.concat("%20");
    }
  }
return encodedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));