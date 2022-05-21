// 1.
// Запиши условие в инструкции if так, чтобы функция работала правильно:
// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     message = "Вы совершеннолетний человек";
//   } else {
//     message = "Вы не совершеннолетний человек";
//   }
//   return message;
// }

// function checkAge(age) {
//   if (age >=18) { // Change this line
//     return "You are an adult";
//     }

//     return "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));
// console.log(checkAge(20));


// 2.
// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD
// и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:
// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//     if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//     }

//     return "Access denied, wrong password!";
//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));


// 3.
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате.
// Она принимает два параметра, значения которых будут задаваться во время её вызова.
// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// function checkStorage(available, ordered) {
//   // Change code below this line
//     if (ordered === 0) {
//     return "Your order is empty!";
//     }
//     if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//     }
//     return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));


// 4.
// Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".

// const fruits = ["apple", "plum", "pear", "orange"];

// console.log(fruits);


// 5.
// Для задачи №4 объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.
// firstElement - первый элемент массива
// secondElement -	второй элемент массива
// lastElement	- последний элемент массива

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);


// 6.
// Для задачи №4 переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// // Write your code under this line
// console.log(fruits);


// 7.
// Для задачи №4 объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// const fruits = ["apple", "peach", "pear", "banana"];
// // Change code below this line
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);


// 8.
// Для задачи №4 объяви две переменные:
// lastElementIndex - Индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	- Значение последнего элемента массива

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);


// 9.
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//   // Change code below this line
//     return [array[0], array[array.length - 1]]
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// 10.
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//     let words;
//   // Change code below this line
//     words = message.split(delimeter);
//   // Change code above this line
//     return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));


// 11.
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord).
// Эта функция принимает строку, состоящую из слов разделённых только пробелами(параметр message) и цену гравировки одного слова(параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let words;
//     words = message.split(" ");
//     return words.length * pricePerWord;
//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));


// 12.
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//     let string;
//   // Change code below this line
//     string = array.join(delimeter)
//   // Change code above this line
//     return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));


// 13.
// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
//   // Change code below this line
//     const slug = title.split(" ").join("-").toLowerCase();
//     return slug
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


// 14.
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// 15.
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);


// 16.
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray.
// Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     const newMakeArray = firstArray.concat(secondArray);
//     const deletedScores = newMakeArray.slice(0, maxLength);
//     return deletedScores;
//     // Change code above this line
// };

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


// 17.
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


// 18.
// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа.
// Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//  // Change code below this line
//   let sum = 0
//   for (let i = 0; i <= number; i += 1) {
//     sum += i
//   }

//   return sum
//   // Change code above this line
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(6));
// console.log(calculateTotal(28));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));


// 19.
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// 20.
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let value of order) {
//     total += value
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// 21.
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   const newArray = string.split(' ');
//   // Change code below this line
//   let longestWord = newArray[0];
//   for (const word of newArray) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord

//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));


// 22. Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (k = min; k <= max; k += 1) {
//       numbers.push(k);
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));


// 23.
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел(параметр numbers) и возвращает новый массив,
// в котором будут только те элементы массива numbers, которые больше чем значение параметра value(число).

// function filterArray(numbers, value) {
//    // Change code below this line
//   let newArray = [];
//   for (let number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray

//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))


// 24.
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));


// 25.Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2,
// и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//     let commonElements = [];
//     for (const element of array1) {
//         if (array2.includes(element)) {
//             commonElements.push(element)
//         }
//     }
//     return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// 26.
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let item of order) {
//     total += item;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));


// 27.
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
// Change code below this line
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {
//       if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20);


// 28.
// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

// Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


// 29.
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end.
// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).

// function getEvenNumbers(start, end) {
//    // Change code below this line
//     let evenNumbers = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//       }
//     }
//     return evenNumbers;
//     // Change code above this line
// }
  
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));


// 30.
// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);


// 31.
// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number

// function findNumber(start, end, divisor) {
//   // Change code below this line
  
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

  
//   // Change code above this line
// }


// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));


// 32.
// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє,
// чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// function includes(array, value) {
//   // Change code below this line
//   for (let element of array) {
//     if (element == value) {
//       return true;
//     }
//   }
//    return false;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));