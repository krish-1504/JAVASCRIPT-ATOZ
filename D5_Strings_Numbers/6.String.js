let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); // 7 to 12 ( end not included)
part = text.slice(7); // rest of string
part = text.slice(-12); // position counter form end of the string output is  "Banana, Kiwi"
part = text.slice(-12, -6);
part = text.substr(7,6) // second paramenter is to define length
part = text.substring(7,13)//start and end if given value is less the 0 so it will consider 0.



newText = text.replace("Microsoft", "W3Schools");
newText = text.replace(/MICROSOFT/i, "W3Schools"); // /i is for case sensitive so it will also work
newText = text.replace(/Microsoft/g, "W3Schools"); // for replace all



text = text.replaceAll("cats","dogs");


text2 = text1.toLowerCase(); 
text2 = text1.toUpperCase();


text3 = text1.concat(" ", text2);
text = "Hello".concat(" ", "World!");



let text1 = "      Hello World!      ";
let text2 = text1.trim();
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();


let text = "5";
let padded = text.padStart(4,"0"); // 0005 o/p
padded = text.padEnd(4,"0");


let text = "HELLO WORLD";
let char = text.charAt(0);
let text = "HELLO WORLD";
let char = text.charCodeAt(0);


text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe