const number1 = +(prompt("Ввведите первое число"));
alert(` ${number1} градус по Цельсию это ${sum(number1)} по Фаренгейту`);

function sum(num1) {
    sum = (9 / 5) * num1 + 32
    return sum.toFixed(1);
}