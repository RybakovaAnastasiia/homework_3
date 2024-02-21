//Вам необхідно написати функцію findValueByKey(Object, companyName),
// яка буде приймати значення у вигляді 'Клієнт 1.2' ('Велика Компанія', 'Клієнт 2'... )
// та надавати інформацію про цю subCompany.
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};
function findValueByKey(obj, companyName) {
    let result = []
    function search(obj){
for(const key in obj){
    if (obj[key] === companyName){
        result.push(obj)
    }
    else if (typeof obj[key] === 'object'){
        if (Array.isArray(obj[key])){
            obj[key].forEach(item => search(item))
        }
    }
}
    }
   search(obj)
   return result
}
console.log(findValueByKey(company,'Клієнт 1.2.3'))

