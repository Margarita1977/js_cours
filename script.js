const title = "Проект js";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = Math.random();
const rollback = Math.ceil(Math.random()*100);
const fullPrice = "400700" ;
const adaptive = true || false ;

alert ('Hello');

console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log(screens.length);
console.log(screens.toLowerCase());
console.log(screens.split(" "));
console.log("Стоимость разработки сайта", fullPrice, "рублей/ долларов/гривен/юани");
console.log(fullPrice * (rollback/100));
