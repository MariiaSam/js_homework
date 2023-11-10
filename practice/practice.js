// ********************ЦИКЛИ******************** 2 ЗАНЯТТЯ

// ++++++++++++++++++ТЕРНАРНИЙ ОПЕРАТОР++++++++++++++++++

// const value = 12;

// let mess;

// mess = value > 15 && value < 20 ? 'в діапазоні від 15 до 20' : 'спробуйте ще';
// console.log(mess)

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

// ********************FUNCTION******************** 4 ЗАНЯТТЯ
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

// ********************ARRAY******************** 3 ЗАНЯТТЯ

// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

//var - 1
// const arr = [3, "Hello", null, 42, false];

// for (let i = 0; i < arr.length; i+= 1) {
//     if (typeof arr[i] !== "number"){
//     arr.splice(i, 1)
//     i -=1
//     }
//  }
//  console.log(arr)

//var - 2

// for (let i = arr.length -1; i >= 0; i-= 1) {
//     if (typeof arr[i] !== "number"){
//             arr.splice(i, 1)    }
// }

//  console.log(arr)

//=============================

// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//     const result = []
//      for (let i = 0; i < arr.length; i+= 1) {
//         if (arr.includes(arr[i], i +1))  {
//             if(!result.includes(arr[i])) {
//                  result.push(arr[i])
// }

//         }
//      }
// return result
//  }

// // console.log(getCommonElements([1, 2, 3, 2, 1, 1, 1, 1, 17, 19]));

// // Task-3
// //Потрібно створити функцію яка буде приймати 2 параметри
// //1 параметр це масив всіх юзерів
// //2 параметр це масив з чоловічими іменами.
// //Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = [
//     "Artem",
//     "Anna",
//     "Larisa",
//     "Maksim",
//     "Svetlana",
//     "David",
//     "Roman",
//     "Olga",
//   ];

//   const men = [ "Artem",
//   "Maksim",
//   "David",
//   "Roman"]

//   function getWomen(users, men) {
//     const women = [];

//     for (const user of users ){
//     if(!men.includes(user)) {
//          women.push(user)
//     }
//     }
//     return women

//   }
// console.log(getWomen(users, men));

// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';
// const SEPARATOR = ''
// const result = string.split(SEPARATOR).reverse().join(SEPARATOR)
// console.log(result)

// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні, то замінювати елементи на вірнi

// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];
// for (let i = 1; i < numbers.length; i+= 1) {
//     const currentElement = numbers[i];
//     const prevElement = numbers[i-1]; //від поточного взяти попереднє

//     // if (currentElement - prevElement !==1) {
//     //     numbers[i] = prevElement + 1
//     // }

//     if(currentElement <= prevElement){
//     numbers[i] = prevElement + 1;
//     }
// }

// console.log(numbers)

// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function createStr(arr) {

//     let result = '';
//     switch (arr.length) {
//         case 0:
//             result = "no one likes this"
//             break;

//             case 1:
//             result = `${arr[0]} likes this`
//             break;

//             case 2:
//             result = `${arr[0]} and ${arr[1]} like this`
//             break;

//             case 3:
//             result = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
//             break;

//         default:
//             result = `${arr[0]}, ${arr[1]} and ${arr.length - 2} 2 others like this`;
//     }
//     return result;
// }

// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));

// ********************OBJECT******************** 3 ЗАНЯТТЯ

// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// function createBasket(product, quantity, price) {
// const totalPrice = quantity* price

// const basket = {
//     name: product,
//     quantity,
//     price,
//     totalPrice: quantity* price,

// }
// return basket

// return {
//     name: product,
//     quantity,
//     price,
//     totalPrice: quantity* price,

// }

// };

// console.log(createBasket("pizza", 3, 120));
// console.log(createBasket('aplle', 13, 1200));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };

// function getTime(obj) {

// const countPlayers = Object.keys(obj)?.length // ? - оператор безпечного ченінгу, ми не потрапимо в помилку
// const values = Object.values(obj)
// let totalTime = 0;

// for (const value of values) {
//     totalTime += value;
// }
//   return `Count of players ${countPlayers}, average time ${totalTime /countPlayers }`

//     const entries = Object.entries(obj)
//     let totalTime = 0;
//     for(const entry of entries) {
//         totalTime += entry[1]
//     }
//           return `Count of players ${entries.length}, average time ${totalTime /entries.length}`

//   }

// console.log(getTime(players));

// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//     { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"], age: 0 },
//     {
//       name: "Oleksii",
//       books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
//       age: 26,
//     },
//   ];

//   function getUsers(arr, bookName) {
//     // let users = '';
//     const users = []
//   for (const user of arr){
//     if(user.books.includes(bookName)){
//         // console.log(user.name)
//         // users += `${user.name}, `
//         users.push(user.name)
//         }
//     }
//     console.log(users)
//     return users.join(', ')

//   }

//   getUsers(friends, "Harry Potter")

// function getTotalAge(arr) {
//       let totalAge = 0;
//       for (const user of arr) {
//         //exp 1
//         // if (user.age) { // 0
//         //   totalAge += user.age;
//         // }

//         // // exp 2
//         // console.log(user.name, user.hasOwnProperty('age'));
//         // if(user.hasOwnProperty('age')){
//         //     totalAge += user.age;
//         // }

//         // // exp 3
//         // console.log(user.name, 'age' in user);
//         // if ("age" in user) {
//         //   totalAge += user.age;
//         // }

//         // console.log(user);
//       }
//       return totalAge;
//     }
//     console.log(getTotalAge(friends));

// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультету

//   const hogvarts = {
//     griffindor: [
//       {
//         name: "Harry",
//         points: 17,
//       },
//       {
//         name: "Hermiona",
//         points: 19,
//       },
//       {
//         name: "Ron",
//         points: 14,
//       },
//     ],
//     slizerin: [
//       {
//         name: "Draco",
//         points: 17,
//       },
//       {
//         name: "Goyl",
//         points: 14,
//       },
//       {
//         name: "Crabbe",
//         points: 5,
//       },
//     ],

//======= 1=========
// getUserList(faculty){
//     if (!(faculty in this)){
//         return 'Not found'
//     }
//     const students = []

//     for (const student of this[faculty] ){
//         students.push(student.name)
//         }
//         return students.join(', ')
// }

// ========2 =========

//     getTotalPoints(faculty){
//         if (!this.hasOwnProperty(faculty)){
//                     return 'Not found'
//                 }
//                 let totalPoints = 0;
//                 for (const student of this[faculty]){
//                     totalPoints += student.points
//                 }
//                 return totalPoints
//     }

// }

// console.log(hogvarts.getUserList("griffindor"));
// console.log(hogvarts.getUserList("qwerty"));
// console.log(hogvarts.getUserList("slizerin"));
// console.log(hogvarts.getUserList('slitherin'));

// console.log(hogvarts.getTotalPoints("griffindor"));
// console.log(hogvarts.getTotalPoints("slizerin"));
// console.log(hogvarts.getTotalPoints("slitherin"));

// console.log(hogvarts.getUserList("griffindor"));
// console.log(hogvarts.getUserList("qwerty"));
// console.log(hogvarts.getUserList("slizerin"));
// console.log(hogvarts.getUserList('slitherin'));

// console.log(hogvarts.getTotalPoints("griffindor"));
// console.log(hogvarts.getTotalPoints("slizerin"));
// console.log(hogvarts.getTotalPoints("slitherin"));

// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(" ");
//   let longestWord = words[0];
//   const allWords = [];

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   for (const word of words) {
//     if (word.length === longestWord.length) {
//       allWords.push(word);
//     }
//   }
//   return allWords;
//   // Change code above this line
// }

// console.log(findLongestWord("and Google do a HElllO roll WOORLD"));

//   const a = {
//       name: 'a'
//   }

//   const b = a;
//   console.log(b === a);

//   const c = Object.create(a)

//   console.log(c === a);

//========================= Деструктуризація, REST, SPREAD ====================

// *************************БЕЗ Деструктуризація об'єкта в циклі***********************************\\

const users = [{ name: 'Kate' }, { name: 'Alex' }, { name: 'Mark' }];

// const names = []

// for (const user of users) {
//     names.push(user.name)
//     console.log(user)
// }

// console.log(names)

// ************************* З Деструктуризація об'єкта в циклі***********************************\\

// const names = []

// for (const {name : userName = 'Name not found '} of users) {
//     names.push(userName)

// }

// *************************Операція rest та spread********************************\\

// const numbers = [1, 2, 3];
// const copy = [...numbers]; //spread -  з одного масиву, об єкту в інший

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [,,first,second, third, ...args] = numbers; // rest, якщо потрібно деструктурузувати щось і забрати щсь одне з масиву, а все інше потрібно зібрати в масив
//  console.log(numbers)
//  console.log(args)

// ************Операція rest та spread в функціях********************************\\

// const numbers = [1, 2, 3];

// function foo(...props){//rest // [1,2,3]
// console.log(props);

// }
// foo(...numbers)// spread під капотом буде передавати колекцію значень

// const names = ['Alice', 'Kate', 'Emma'];

// function foo(first, second, third) {
//     console.log('first', first);
//     console.log('second', second);
//     console.log('third', third);
// }

// foo(...names) // foo('Alice', 'Kate', 'Emma')// spread

// function foo(first, second, ...args) { //rest
//     console.log(first);
//     console.log(second);
//     console.log(args);
// }

// foo('Alice', 'Kate', 'Emma', 'Mia', 'Lily')

// ================Працюємо з об єктом-----------

// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     },
//     car: 'Audi'
// }

// function foo({ name, skills: { html, ...props }, ...props2}) {
//     console.log(name);
//     console.log(html);
//     console.log(props);
//     console.log(props2);
// }
// foo(user)

// Task - 1 - Деструктуризація
// Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username

// const user = {
//   id: 1,
//   username: "harry_potter",
//   profile: {
//     name: "Harry",
//     surname: "Potter",
//     age: 25,
//   },
// };

// const { username, profile, profile: { name, surname} } = user

// console.log(username);
// console.log(profile);
// console.log(name);
// console.log(surname);

// Task - 2 Деструктуризація
// Допиши функцію таким чином щоб кожна властивість об'єкта product була незалежним параметром

// const product = {
//   name: "Smart TV",
//   price: 25000,
//   category: "Electronics",
//   details: {
//     brand: "Samsung",
//     color: "Black",
//     weight: "15.5",
//   },
// };

// function displayProductInfo ({ name, price, category,  details: { brand, color, weight } = {}, } = {}) {
//     console.log(`Назва товару: ${name}`);
//       console.log(`Ціна: ${price} грн`);
//       console.log(`Категорія: ${category}`);
//       console.log("Деталі:");
//       console.log(`- Бренд: ${brand}`);
//       console.log(`- Колір: ${color}`);
//       console.log(`- Вага: ${weight} кг`);

// }

// displayProductInfo(product);

// Task - 3 - Операція spread
//Напиши функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доповненними властивостями id, createAt, а також list зі значеннями "default", якщо в partialContact немає такої властивості


// function createContact(partialContact) {
//  const profile = {
//     id: Date.now(), 
//     createAt: new Date(),
//     list: 'default',
//     ...partialContact
//     }
//     return profile
// }

// console.log(
//       createContact({
//         name: "Mango",
//         email: "mango@mail.com",
//         list: "friends",
//       })
//     ); 
//     console.log(
//       createContact({
//         name: "Poly",
//         email: "poly@hotmail.com",
//       })
//     );

// Task - 4 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.
 
// function transformUsername({firstName, lastName, ...props }) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props
//     }

// }

// or


// function transformUsername(obj) {
//   const keys = Object.keys(obj);
//   console.log(keys);
//   const profile = {};
//   let fullName = [];
//   for (const key of keys) {
//     if (key === "firstName" || key === "lastName") {
//       fullName.push(obj[key]);
//     } else {
//       profile[key] = obj[key];
//     }
//   }

// or

// function transformUsername(obj) {
//    const  firstName = obj.firstName
//    const lastName = obj.lastName
//    const fullName = `${firstName} ${lastName}`

//    delete  obj.firstName
//    delete obj.lastName

//    obj.fullName = fullName

//    return obj
//   }


// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );

// Task - 5 Об'єкт параметрів
// Необхідно зрoбити рефакторинг функції calculateHousePerimeter, так щоб вона приймала об'єкт з параметрами будинку, включаючи довжини сторін будинку. Функція повинна розрахувати та повернути периметр будинку.

// function calculateHousePerimeter({sideA, sideB, sideC, sideD} = {}) {
//   const perimeter = sideA + sideB + sideC + sideD;
//   return perimeter;
// }


// const perimeter = calculateHousePerimeter ({sideA: 10, sideB: 15, sideC: 10, sideD: 15}) 
// об єкт параметрів  



//=========================== AROW FUNCTION, FOR EACH 4.1=================

// JSDoc - comment коротка відомість про функцію яка допомагає іншому розробнику швидше зрозуміти що робить, приймає та повертає функція.
// Для створення JSDoc - comment на рядку перед створеною функціює натискаємо /**
// Далі описуємо нашу функцію.

// function declaration

/**
 * Buy product, log message with purchase info - опис функції
 * @param {String} productName
 * @param {Number} productQty
 * @param {Number} price
 */

// function buyProduct(productName, productQty, price) {
//   console.log(
//     `You buy ${productQty} ${productName}'s, cost per item ${price}, total cost ${
//       productQty * price
//     }`
//   );
// }
// Плюс function declaration, те що вона має поведінку хойтингу, доступна нм ще перед викликом і ініціалізацією 

// buyProduct("apple", 10, 35);


//function expression

// const buyProduct = function (productName, productQty, price){
//   console.log(
//     `You buy ${productQty} ${productName}'s, cost per item ${price}, total cost ${
//       productQty * price
//     }`
//   );
// }
// buyProduct("apple", 10, 35);

// обмеження, ф-ція є анонімною і для її виклику явно задаєм їй ім я, ми не можемо її викликати перед її ініціалізацією 

// ================================arrow function================

// const buyProduct = (productName, productQty, price) => {
//   console.log(
//     `You buy ${productQty} ${productName}'s, cost per item ${price}, total cost ${
//       productQty * price
//     }`
//   );
// };
// buyProduct("apple", 10, 35);


// ***********Неявне повернення******** \\

// Явне повернення
/**
 * Get product total price
 * @param {Number} qty - quantity items
 * @param {Number} price - price per item
 * @returns {Number} - total price
 */
// const getTotalPrice = (qty, price) => {
//     return qty * price;

// };
// getTotalPrice(3, 150);

// Один параметр з дужками
/**
 * Check user strong password 😂
 * @param {String} password
 * @returns {Boolean}
 */
// const checkPassword = (password) => password === "qwerty111";
// const checkPassword = password => password === "qwerty111";

// console.log(checkPassword('qwerty111'));
// console.log(checkPassword('qwerty222'));

// **************************************Callback function*********************************************\\

// *******Callback функція у вигляді посилання на функції*****\\

// function logResult (a, b, callback){
// console.log(callback)
// const result = callback (a, b)
// console.log(`Result is ${result}`)


// }

// logResult(4, 5, add)
// logResult(4, 5, sum)

// function add(a, b) {
//     return a + b;
//   }
  
//   function sum(a, b) {
//       return a * b;
//   }



// ******************Інлайнова Callback функція******************\\
// function logResult(a, b, callback) {
//     // console.log(callback);
//     const result = callback(a, b);
//     console.log(`Result is ${result}`);
// }

// logResult(4, 5, (a, b) => a + b)
// logResult(4, 5, (a, b) => a * b)
// logResult(4, 5, (a, b) => a - b)
// logResult(4, 5, (a, b) => a / b)
// logResult(4, 5, (a, b) => a ** b)
// logResult(4, 5, (a, b) => a % b)

// ************************************** forEach *********************************************\\

// const products = ["Apple", "Banana", "Orange", "Mango", "Watermelon"];

// Цикл for

// for (let i = 0; i < products.length; i+= 1) {
//     const product = products[i];

//     console.log(`${i + 1} - ${product}`)
    
// }

// // forEach - нічого не повертає

// products.forEach((product, idx, arr) => console.log(`${idx + 1} - ${product}`))
// products.forEach(function (product, idx, arr) { console.log(`${idx + 1} - ${product}`))}

// function logItem(product, idx) {
//     console.log(`${idx + 1} - ${product }`)
// }

// products.forEach(logItem)

// function customForEach (arr, callback) {
//     for (let i = 0; i<arr.length; i+= 1) {
//     callback(arr[i], i, arr)
//     }
// }

// customForEach(products, (product, idx) => console.log(`${idx +1 } - ${product}`));


// ******************************************* Практика **************************************************\\

// Task - 1
// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек що приймає об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//     const product ={
//     id: Date.now(), 
//     ...obj
//     }
// callback(product); 
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice({ price, quantity }) {
//     console.log(`Product total price ${price * quantity}`);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);




// Task - 2
// Напишіть функцію яка буде отримувати 2 параметри.
// 1 - масив чисел.
// 2 - функцію яка має опрацювати кожен елемент масиву.
//
// Функція повертає новий масив кожен елемент якого є результатом виконання колбек функції
// callback

 // action - callback
// function each(arr, action) {
// const items = [];

// // arr.forEach(element => {
// //     const result = action(element)
// //     items.push(result)
// // });

// // OR

// arr.forEach(item =>  items.push(action(item)));

// return items
// }


// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));


// Task-3
// Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback.
// Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback.
// У випадку якщо товар не знайдено, викликається errorCallback і передається повідомлення про помилку.

// const products = [
//   {
//     id: 1,
//     name: "Телефон",
//     price: 10000,
//     description: "Смартфон з високоякісним дисплеєм та потужним процесором.",
//   },
//   {
//     id: 2,
//     name: "Ноутбук",
//     price: 25000,
//     description: "Легкий та потужний ноутбук для роботи та розваг.",
//   },
//   {
//     id: 3,
//     name: "Планшет",
//     price: 8000,
//     description: "Компактний планшет для перегляду контенту.",
//   },
// ];

// function getProductDetails(id, success, error) {
//      for (const product of products) {
//         if(product.id === id) {
//             success(product)
//             reeturn;
//         }
//     }
//     error(id)
// }

// getProductDetails(3, handleSuccess, handleError);
// getProductDetails(44, handleSuccess, handleError)

// function handleSuccess(message) {
//   console.log(`✅ Success!`, message);
// }

// function handleError(productId) {
//   console.log(`❌ Error! Product with ${productId} id not found`);
// }

// Task-4
// Напишіть функцію calculateAveragePrice, яка приймає на вхід масив об'єктів, що представляють товари, та колбеки onSuccess та onError.
// Функція повинна обчислювати середню ціну товарів у масиві та викликати колбек onSuccess, передаючи йому отриману середню ціну як аргумент.
// Якщо масив товарів порожній, функція повинна викликати колбек onError, передаючи йому рядок "No products found".
// Для форматування середньої ціни використовується метод toFixed(2), щоб обмежити число до двох десяткових знаків.

// const products = [
//   { name: "Apple", price: 0.99 },
//   { name: "Banana", price: 0.49 },
//   { name: "Orange", price: 0.79 },
//   { name: "Mango", price: 1.99 },
// ];

// function calculateAveragePrice(products, onSuccess, onError) {
//     // if (products.length === 0) {
//     //     onError('No products found')
//     // }

//     if (!products.length) {
//      return onError('No products found')
//     }
//     let total = 0;
//     products.forEach(({price}) => total += price )
//     onSuccess(total/products.length)
        
// }


// const onSuccess = (averagePrice) => console.log('Average price', averagePrice.toFixed(2) )

// const onError = (errorMessage) => console.log('Error', errorMessage )

// calculateAveragePrice(products, onSuccess, onError);


// console.log(singl.getElem(10));
// console.log(singl.getElem(20));
// console.log(singl.getElem(30));
// console.log(singl.getElem(40))