let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); // 7 to 12 ( end not included)
part = text.slice(7); // rest of string
part = text.slice(-12); // position counter form end of the string output is  "Banana, Kiwi"
part = text.slice(-12, -6);