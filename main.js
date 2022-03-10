function info() {
    let Name = prompt('Введите своё имя');
    let Age = +prompt('Введите ваш год рождения');
    let Year = +prompt('Введите нынешний год')
    let result = ('Ваше имя ' + Name + ', вам уже ' + (Year - Age))
    return result
} console.log(info());

function rand(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
let a = +prompt('Введите количество примеров');
function rand(max){
    return Math.floor(Math.random() * max + 1);
}
let max = 15;
 
for (i = 0; i < a; i++) {
    let b = rand(max);
    let c = rand(max);
    let e = Math.floor(Math.random() * 4 + 1)
 
    if (e == 1) {
        var fun = b + c;
        var answer = prompt("Введите  правильный ответ:" + b + "+" + c + "=");
    } else if (e == 2) {
        var fun = b - c;
        var answer = prompt("Введите правильный ответ:" + b + "-" + c + "=");
    } else if (e == 3) {
        var fun = b * c;
        var answer = prompt("Введите правильный ответ:" + b + "*" + c + "=");
    } else if (e == 4) {
        var plusMinus = b / c;
        var answer = prompt("Введите правильный ответ:" + b + "/" + c + "=");
    }
 
    if (fun == answer){
        console.log('Ваш ответ верный - ' + fun);
    } else {
        console.log('Ваш ответ не верный - ' + answer + '!' + ' Верный ответ - ' + fun );
    }
}