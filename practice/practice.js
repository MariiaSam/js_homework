
// ********************ЦИКЛИ******************** 2 ЗАНЯТТЯ


// ++++++++++++++++++ТЕРНАРНИЙ ОПЕРАТОР++++++++++++++++++ 

const value = 12;

let mess;

mess = value > 15 && value < 20 ? 'в діапазоні від 15 до 20' : 'спробуйте ще';
console.log(mess)


// ++++++++++++++++++FOR++++++++++++++++++ 

// const mess = "hello world"
// for (let i = 0; i < mess.length; i+= 1 ){
//     console.log(mess[i])
// }

// пост-, пред- вираз i++

// ++++++++++++++++++WHILE++++++++++++++++++ 
// const mess = "hello world"
// let i = 0;
// while(i < mess.length) {
//       console.log(mess[i])
//     i += 1
// }
// ітератори, генeратори - НОДА

// ++++++++++++++++++DO WHILE++++++++++++++++++ 
// let i = 0;
// const mess = "hello world";

// do {
// console.log(mess[i]);
// i += 1;
// } while (i < mess.length)


// ++++++++++++++++++ЗАДАЧІ З ЛЕКЦІЇ РИСІЧА++++++++++++++++++ 

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію switch
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати

// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// let mess = prompt(`Color ?`);
// let action;

// if(mess){ // Boolean ? true : false
//     mess = mess.toLowerCase();
// }

// switch (mess) {
//     case 'red':
//         action = 'stop'
//         break;

//         case 'yellow':
//             action = 'ready'
//             break;

//             case 'green':
//                 action = 'go'
//                 break;

//     default:
//         action = 'be carefuly'

//         break;
// }
// console.log(action);

// Золоте правило - перевіряємо в НИЖНЬОМУ РЕГІСТРІ!!!


// Task - 2
// Потрібно створити застосунок для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 вірна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)


// function check(text, answer){
//     let mess = prompt(text)

//  if (mess){
// mess = mess.toLowerCase()
//  }
//  console.log(mess)
//  return mess === answer // if we haven`t `RETURN`, function return - UNDEFINED
// }


// console.log(
//   check("Хоч не літак, а крилатий, Без крил не може працювати.", "вітряк")
// );
// console.log(check('Через воду він проводить, А сам з місця вік не сходить', 'міст'));

// Тестові дані
// Хоч не літак, а крилатий,
// Без крил не може працювати.
// (Вітряк)

// Через воду він проводить,
// А сам з місця вік не сходить.
// (Міст)


// Task - 3
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// function getDays(depth){
//     const daysSpeed = 7;
//     const nightSpeed = 2;
//     let total = 0; // пройдений шлях
//     let days = 0;

//       while (total < depth){
//         total += daysSpeed;
//         days += 1;

//         if (total < depth){
//         total -= nightSpeed;
//      }
//     }
//      console.log(days)
//  }
//  getDays(42)
//  getDays(49)
//  getDays(16)

// Task - 4
// Порахуй скільки голосних літер у реченні.

// function countVowel (str) {
// const vowels = 'aeiou';
// str = str.toLowerCase()
// let counter = 0;

//  for (i = 0; i < str.length; i+= 1){
//     if (vowels.includes(str[i])){
//     counter += 1 
//        }
//     }
//     return counter
// }

// console.log(countVowel("HELLO WORLD")); // 3
// console.log(countVowel("Junior Web Developer")); // 8




// ********************ARRAY******************** 3 ЗАНЯТТЯ
// const array = ["Hello world", null, true, 15];

// console.log(array.length);
// console.log(typeof 1);
// console.log(typeof 'hello');
// console.log(typeof array); // object
// console.log(Array.isArray(array)); // true
// console.log(Array.isArray({})); // false


// // Перебір масиву
// const array = ["Hello world", null, true, 15];

// // Цикл for
// for (let i = 0; i < array.length; i+=1){
//     let item = array[i]

//     if(array[i] === null){
//         array[i] = 'I love JS'
//     }
//     console.log(item);
// }

// console.log(array);

// ++++++++++++++++++ЗАДАЧІ З ЛЕКЦІЇ РИСІЧА TOPIC ARRAY++++++++++++++++++ 

// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arr = [3, "Hello", null, 42, false];

// Приклад - 1
// for (let i = 0; i < arr.length; i += 1) {
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//     i -= 1;
//   }
// }
// console.log(arr);

// Приклад - 2
// const arr = [3, "Hello", null, 42, false];
// for(let i = arr.length -1; i >= 0; i-=1){
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

//========================Taska==============
// Створи функцію, яка буде перевіряти чи кожен елемент масиву більш ніж вказане значення. Функція приймає два параметри .
// 1 - масив чисел
// 2 - число, яке потрібно порівнювати з усіма елементами масиву.
// функція, яка повертає повідомленя про успішну або неуспішну перевірку (Success, Fail)

// const numbers = [25, 12, 67, 40, 18]

// function checkValue (arr, targetValue) {
//     let mess = 'Success';
    
//     for (const value of arr){
//     if (value <= targetValue) {
//     mess = "Fail"
//         }
//     }
// return mess
// }

// console.log(checkValue (numbers, 10))
// console.log(checkValue (numbers, 16))

//========================Taska 2==============
//Створи функцію, яка буде розбивати початковий масив на потрібну кількість елементів розділяючи а декілька масивів.
// Параметри, 
// 1 - масив значень
// 2 - потрібну кількість елементів в масиві
// Функція повертає масив елементів

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function getCombination(arr, count) {
//     const result = [];

//     for (let i = 0; i < arr.length; i+= count) {
//         const combination = arr.slice(i, i + count)
//         result.push(combination)
//     }
// }

// console.log(getCombination(data, 3))
// console.log(getCombination(data, 2))


//========================Taska 3==============

// Напиши функцію getReactArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядкаю Значення гарантовано розділені пробілом.

// function getReactArea(dimensions) {
// const values = dimensions.split(' ')
// console.log(values)
// const firstValue = Number(values[0])
// const secondValue = Number(values[1])

// return firstValue * secondValue
// }

// console.log(getReactArea('8 11'))
// console.log(getReactArea('15 11'))


//========================Taska 4==============

// Напишіть функції для роботи з колекцією навчальних курсів

// addCourse (name) - додає курс до кінця колекції
// removeCourse(name)- видаляє курс із колекції
// updateCourse(name)- змінює ім я на нове

// const courses = ['HTML', "NestJs", 'CSS', "JS", "React", "PostgreSQL"]

// function addCourse(name) {
// if(courses.includes(name)){
// alert ("Ви вже маєте такий курс")
// } else {
//     courses.push(name)
// }
    
// }

// addCourse("Express")
// addCourse("CSS")

// function removeCourse(name) {
//     const idx = courses.indexOf(name) // якщо не знайшов, то повертає -1

//     if (idx === -1){
//         return 'курс з таким ім ям не знайдено'
//     } 
//     courses.splice(idx, 1)
// }



// const courses = ['HTML', "NestJs", 'CSS', "JS", "React", "PostgreSQL"]
// function updateCourse(oldName, newName) {
// const idx = courses.indexOf(oldName)
// const inCourses = courses.includes(newName)

// if(idx !== -1 &&  !inCourses){
//     // courses.splice(idx, 1, newName) 
// courses[idx] =  newName
// } else if(inCourses){
//     return "Ви вже вивчаєте такий курс"

// } else{
// return "курс з таким ім ям не знайдено"
// }

// }

// updateCourse('HTML', "NestJs")