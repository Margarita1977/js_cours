                    // =================
                    //     lesson1   //
                    // =================

// const title = "Проект js";
// const screens = "Простые, Сложные, Интерактивные";
// const screenPrice = Math.random();
// const rollback = Math.ceil(Math.random()*100);
// const fullPrice = "400700";

// const adaptive = true || false;

// alert ('Hello');

// console.log(title);
// console.log(fullPrice);
// console.log(adaptive);
// console.log(screens.length);
// console.log(screens.toLowerCase());
// console.log(screens.split(" "));
// console.log("Стоимость разработки сайта", fullPrice, "рублей/ долларов/гривен/юани");
// console.log(fullPrice * (rollback/100));
// 
//
//  

                        // =================
                        //     lesson3    //
                        // =================

let title = prompt('Как называется ваш проект?', "Project");
console.log(title);

let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
console.log(screens);

let screenPrice = +prompt('Сколько будет стоить данная работа?', "18888");
console.log(screenPrice);

let adaptive = prompt('Нужен ли адаптив на сайте?', "да/нет");
console.log(adaptive == 'да')

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'продукты');
let servicePrice1 = +prompt('Сколько это будет стоить?', '20000');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'бензин, транспорт');
let servicePrice2 = +prompt('Сколько это будет стоить?', '1500');

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

let servicePercentPrice = fullPrice - 5000.60;
console.log(Math.ceil(servicePercentPrice));

if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice > 15000 &&  fullPrice < 30000 ) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что то пошло не так');
} else {
    console.log('к сожалению у вас уровень дохода ниже среднего');
}


 

                        // =================
                        //     lesson4    //
                        // =================
const getAllServicePrices = function (servicePrice1,servicePrice2) {
    console.log(servicePrice1 + servicePrice2); 
}
let allServicePrices = getAllServicePrices(servicePrice1,servicePrice2);

function getFullPrice(screenPrice,allServicePrices) {
    console.log(screenPrice + allServicePrices);
}
let fullPrice = getFullPrice(screenPrice,allServicePrices)

