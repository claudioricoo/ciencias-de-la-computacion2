let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squaredNumbers = numbers.map(num => num * num);
let cubicNumbers = numbers.map(num => num * num * num);
let sortedNumbers = squaredNumbers.sort((a, b) => a - b);
let sortedNumbers2 = cubicNumbers.sort((a, b) => a - b);

document.getElementById("numeros").innerHTML = numbers;
document.getElementById("cuadrados").innerHTML = squaredNumbers;
document.getElementById("cubos").innerHTML = cubicNumbers;
