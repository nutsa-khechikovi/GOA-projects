//  getElementById - abrunebs ert elements da gamoiyeneba roca id unikaluria
//  getElementsByClassName - abrunebs ramdeni elemnets romlebsac eqnebat ertnairi class
//  getElementsByTagName - abrunebs ramdenime elemnts ertnairi tagebit


let title = document.getElementById("title");


let paragraphs = document.getElementsByClassName("text");
console.log(paragraphs.length);
console.log(paragraphs[0].textContent);


let items = document.getElementsByTagName("li");
console.log(items.length);
console.log(items[1].textContent);
