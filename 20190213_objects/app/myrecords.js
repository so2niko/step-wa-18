let car = {},//Объект описание автомобиля
    del = "--", // разделитель в пользовательском вводе
    exit = 'exit', // условия окончания ввода данных об автомобиле
    userIn = "", // для ввода одного свойства--значения автомобиля
    counter = 0, // Счетчик для прогресса пользователя(чтобы не психовал)
    tempArr = []; // Для хранения пар свойства--значение в виде массива

while(true){
    userIn = prompt('Пожалуйста, введите данные об автомобиле в виде свойство--значение. ' + counter + "\nДля выхода наберите - exit");

    //Условие выхода из цикла
    if(userIn == exit){
        break;
    }

    tempArr = userIn.split(del);

    if(tempArr.length == 2){
        counter++;
        car[tempArr[0]] = tempArr[1];
    }
}

console.clear();
console.log(car);