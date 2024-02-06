//ЗАДАЧА 2.
//Написати функцію pow(x,y) яка буде приймати 2 числа,
//перше - це число яке ми будемо зводити у ступінь, друге - у яку ступінь.
function numberDegree(x , y)
{
    let oneAnswer = 1;
    for(let i = 0; i < y; i++)
    {
        oneAnswer = oneAnswer * x;
    }
    console.log(oneAnswer);
}
numberDegree (2, 3);
