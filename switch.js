let languageCode = 'en';

// Using if else

if (languageCode === 'hi') {
    console.log("Hindi");
} else if (languageCode === 'de') {
    console.log("German (Standard)");
} else if (languageCode === 'en') {
    console.log("English");
} else if (languageCode === 'fr') {
    console.log("French (Standard)");
} else if (languageCode === 'es') {
    console.log("Spanish (Spain)");
} else {
    console.log("Sorry, we do not support the given language as of now");
}

languageCode = 'hi';

// Using switch case

switch(languageCode) {
  case "hi":
    console.log("Hindi");
    break;

  case "de":
    console.log("German (Standard)")
    break;
case "en":
    console.log("English");
    break;

  case "fr":
    console.log("French (Standard)");
    break;

  case "es":
    console.log("Spanish (Spain)");
    break;

  default:
    console.log("Sorry, we do not support the given language as of now");
    break;
}
