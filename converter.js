var a = "кг";
var j = 1;
switch (a) {
    case "км":
        console.log('10 км це ' + (j*1000) + ' м');
        break;
    case "год":
        console.log('1 год це ' + (j*60) + ' хв');
        break;
    case "кг":
        console.log('1 кг це ' + (j*1000) + ' г');
        break;
    default:
        console.log('Введіть будь ласка одиницю вимірювання: км, год, кг');
}