//У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
//За допомогою регулярного виразу створіть масив з адресами, гідними довіри.
//Постарайтеся також зробити просту валідацію до @
//одне, або два слова які, можуть містити (латинські букви, цифри) яке може бути розділене крапкою.

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andghj@mail.ru" // Нам такі не підходять
    },
    {
        userName:"Dmitro",
        lastName:"Rybakova",
        email:"nastyaporohov@yahoo.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.poro.hov@yahoo.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.poro7hov@yahoo.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.poro*hov@yahoo.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.poro hov@yahoo.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"Porohova@yahoo.com"
    },
];
var re = /^(\w+[\.]?\w+)@(yahoo.com|gmail.com)$/
console.log(arr.filter(m =>re.test(m.email)).map(({email})=>email));




