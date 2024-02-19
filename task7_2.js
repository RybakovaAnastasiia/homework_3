//Умови виконання ДЗ:
//створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
//створити метод minPrice() - який повертає мінімальний price
//створити метод maxPrice() - який повертає максимальний price

/////////////////////////////////////////////////////
var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн" };

services.price = function() {
    let h = 0;
    for (let key in this) {
        if (typeof this[key] === 'string' ) {
            h += parseInt(this[key]);
        }
    }
    return h;
};
services['Розбити скло'] = "200 грн";
console.log(services.price());
///////////////////////////////////////////////////////////
/*function minPrice(obj) {

    for (let key in obj) {
        console.log(Math.min(Number.parseInt(obj[key])))
    }
}
minPrice(services);
services['Розбити скло'] = "200 грн";
minPrice(services);*/

