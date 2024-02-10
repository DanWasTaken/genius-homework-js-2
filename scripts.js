// 1 Завдання
// Якщо змінна більше нуля - виведіть true, менше - false
// Перевірте на варіантах 1, 0, -3

// const ex1 = (arr) => {
//   for (i in arr) {
//     if (arr[i] > 0) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }
// }

// const ex1Arr = [1, 0, -3];
// ex1(ex1Arr);

// 2 Завдання
// Якщо змінна = "test" - виведіть true
// Перевірте це на варіантах 'test', "qwerty", true

// const ex2 = (arr) => {
//   for(i in arr) {
//     if (arr[i] === "test") {
//       console.log(true);
//     } else {
//       console.log(false)
//     }
//   }
// }

// const ex2Arr = ['test', "qwerty", true];
// ex2(ex2Arr);

// 3 Завдання
// Якщо змінна більше 10 - відніміть 5
// Менше - додайте 5, результат виведіть в консоль
// Перевірте на варіантах 1, 10, 13

// const ex3 = (arr) => {
//   for(i in arr) {
//     if (arr[i] > 10) {
//       console.log(arr[i] - 5);
//     } else if (arr[i] < 10) {
//       console.log(arr[i] + 5);
//     } else {
//       console.log(arr[i]);
//     }
//   }
// }

// const ex3Arr = [1, 10, 13];
// ex3(ex3Arr);

// 4 Завдання
// Зробіть сервіс, який отримує число від 1 до 12
// Виведіть місяць, який дорівнює числу

// const ex4 = (key) => {
//   switch (key) {
//     case 1:
//       alert('Січень');
//       break;
//     case 2:
//       alert('Лютий');
//       break;
//     case 3:
//       alert('Березень');
//       break;
//     case 4:
//       alert('Квітень');
//       break;
//     case 5:
//       alert('Травень');
//       break;
//     case 6:
//       alert('Червень');
//       break;
//     case 7:
//       alert('Липень');
//       break;
//     case 8:
//       alert('Серпень');
//       break;
//     case 9:
//       alert('Вересень');
//       break;
//     case 10:
//       alert('Жовтень');
//       break;
//     case 11:
//       alert('Листопад');
//       break;
//     case 12:
//       alert('Грудень');
//       break;
//     default:
//       alert(`Місяця під номером ${key} не існує`);
//       break;
//   }
// }

// let monthNumber = prompt('Введіть номер місяця');
// ex4(parseInt(monthNumber));


// 5 Завдання
// Зробіть сервіс, який отримує тризначене число
// Поверніть користувачу суму цих чисел

// let userInput = prompt('Введіть тризначне число');

// const ex5 = (number) => {
//   let sum = 0;
//   let temp = number.split('');
//   let temp2 = temp.map((e) => parseInt(e));

//   temp2.map(e => sum += e);

//   alert(sum);
// }

// ex5(userInput);