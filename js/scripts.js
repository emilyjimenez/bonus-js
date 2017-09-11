var sentence = prompt("enter a sentence");

var selectZero = sentence.charAt(0);

var sentence2 = sentence.slice(1);

var first = selectZero.toUpperCase();

var selectEnd = sentence.charAt(sentence.length-1);

var last = selectEnd.toUpperCase();

var sentence3 = sentence.slice(sentence.length-1);

alert(first+sentence2+last);
