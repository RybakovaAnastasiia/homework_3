let age = prompt("Введіть будь ласка Ваш вік")
//let age = 44;
let counter = age;
let word = "";
if (age < 0){
    console.log("Введіть додатнє число!")
}
else if(counter >=10 && counter<=20){
    word = "років";
} else {
    counter = age % 10;
    if (counter === 1){
        word = "рік";
    } else if(counter >= 2 && counter <= 4){
        word = "роки";
    } else {
        word = "років";
    }
}
console.log(age + " " + word);