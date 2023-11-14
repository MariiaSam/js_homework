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

// const users = [{ name: 'Kate' }, { name: 'Alex' }, { name: 'Mark' }];

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


//========================ПЕРЕБИРАЮЧІ МЕТОДИ МАСИВУ 4.2==============

// Тестовий масив для теоретичного блоку

// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];
// console.log(users);

// ==========================MAP========================
// const names = []
// for (const user of users) {
//     names.push(user.name)
// }
// console.log(names) 

// const names = users.map(function(){
// }) 
// Поверне масив тaкої довжини, якої був, що буде входити в нього, потрібно розписати в коллбук ф-цію
// const names = users.map((user) => user.name) 
// console.log(names)

// const names = users.map(({name}) => name) 
// console.log(names)


// ********flatMap******** \\
// const numbers = [[1], [2], [3, [4]]]; => [1,2,3]

// для двох трьох вимірних масивів, щоб розгладити масив

// const skills = users.flatMap((user) =>user.skills)
// console.log(skills)

// const arr1 = [0, 1, 2, [3, [4, [45]]]];

// const res = arr1.flatMap(item => item)
// console.log(res)


// ********flat******** \\

// повертає масив, і не примймає коллбeк функцію, а приймає глубину, яку ми хочемо розгорнути 

// const arr = [0, 1, 2, [3, [4, [45]]]];

// // const res = arr.flat(3)
// // console.log(res)

// function findDepth(arr) {
//     let depth = 0

//     for (const item of arr) {
//     if (Array.isArray(item)) {
//         depth += 1
//         depth += findDepth(item)
//         }
//     }
//     return depth

// }
// console.log(findDepth(arr))
 


// ********filter******** \\

//відібрати певну кільсть елементів по певному критерію,  повертає повністю елемент ітерації

// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];

// const res = users.filter(user => user.age > 30) //  user.age > 30, якщо умова TRUE, то він забирає  елемент ітерації повністю, тобто наш об"єкт, якщо False => filter ігнорує і йде далі, якщо повністю не задовольняються умови, то повертається порожній масив

// const res = users.filter(({age}) => age >= 40) //  з деструкт

// const res = users.filter(({skills}) => skills.includes('JavaScript')) 
// console.log(res)


// ********find******** \\

// бере лише перший елемент, який задовольняє умову, поверне НЕ МАСИВ, а ЕЛЕМЕНТ ітерації

// const res = users.find(({skills}) => skills.includes('JavaScript'))
// console.log(res)


// ********findIndex********\\

// Повертає індекс елемента, який задовольняє нашу умову

// const arr = [4, 5, 63, 4];
// console.log(arr.indexOf(4)); 

// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];

// const idx = users.findIndex(({id}) =>id ===3)
// console.log(idx)// якщо немає такого елемента, то поверне -1;
  
// ********every********\\
// повертає ТРУ, якщо хоча ВСІ елементи задовольняють нашу умову

//
// const users = [
//     { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//     { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//     { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//     { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//     { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
//   ];
// const isKnow = users.every(({skills}) => skills.includes("Python"))
// console.log(isKnow);

// const isAdult = users.every(({age}) => age >= 18)
// console.log(isAdult);


// ********some********\\
// повертає ТРУ, якщо хоча б один елемен задовольняє нашу умову
// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];

// const isKnow = users.some(({skills})=> skills.includes("Python"))
// console.log(isKnow)

// ********sort********\\

// Мутуючий метод, не варто використ дестр

// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 6, name: "alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];

// const res = users.sort((a, b) => a.age - b.age)
// console.log(res)

// якщо сортуємо по рядкам, то використвоуєм метод localeCompare
// const res = users.sort((a, b) => a.name.localeCompare(b.name))
// console.log(res)


// const numb = [1, 2, 4, 6, 7, 8, 11, 12, 4]
// // console.log(numb.sort())

// console.log(numb.sort((current,next) => current - next));


// ********reduce********\\
//  Може повертати рядки, масиви, числи, об"єкти, булі
// Обов_acc -аккамулятор НАШЕ ПОЧАТКОВЕ ЗНАЧЕННЯ, item - ітеруємий елемент
// в reduce завжди хочемо повернути значення аккамулятора


// const users = [
//     { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//     { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//     { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//     { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//     { id: 6, name: "alice", age: 32, skills: ["Python", "Data Analysis"] },
//     { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
//   ];

//   //  const res = users.reduce(() =>{}, '')
//   // const res = users.reduce(() =>{}, {})
//     // const res = users.reduce(() =>{}, [])
// //   const res = users.reduce((acc, item) => {
// //     return acc + item.age
// // }, 0) // останнє значення записується, як результат


// const names = users.reduce((acc, {name, age}) => {
//     if (age >= 30) {
//    acc.push(name)  
//     }
   
//     return acc
// },[])
// console.log(names)

// ===================================ПРАКТИКА================

// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента.

// const students = [
//   { name: "John", grades: [80, 85, 90] }, //  { name: "John", average: 85 }
//   { name: "Alice", grades: [90, 95, 92] },
//   { name: "Bob", grades: [70, 80, 75] },
//   { name: "Emily", grades: [95, 92, 88] },
//   { name: "David", grades: [85, 88, 90] },
// ];

// function getAverage(arr) {
//   const res =  arr.map(({name, grades}) => {
//     const total = grades.reduce((acc, item) => acc + item)
//     console.log(total)

//     return {
//     name, 
//     averge: Math.round(total/grades.length)

// }
// }) 
//  return res;   
// }

// console.log(getAverage(students))


// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

// const students = [
//   { name: "John", age: 20, gpa: 3.8 },
//   { name: "Alice", age: 21, gpa: 3.2 },
//   { name: "Bob", age: 19, gpa: 3.5 },
//   { name: "Emily", age: 22, gpa: 3.9 },
//   { name: "David", age: 20, gpa: 3.7 },
// ];


// function getAdult(arr) {
//     return arr.filter(({age}) => age > 20).map(({name}) => name)
// } //на результаті одного методу filter запускаємо інший - MAP

// console.log(getAdult(students));


// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title).
// Якщо книгу не знайдено повертається рядок 'Not found'.


// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];


// function getBook(arr, title) {
//     const book = arr.find(({title: titleBook }) => titleBook === title)// якщо не знаходить елементб то метод find поверне Undefind

//     return book || "Not found" // якщо не знаходить book, оператор || - бере останнннє значення

// //   || 0,'',null,NaN,undefined, false
// //   ?? null, undefined



// }

// console.log(
//   getBook(
//     books,
//     "Design Patterns: Elements of Reusable Object-Oriented Software"
//   )
// );
// console.log(getBook(books, "qwerty"));

// Task-4
// Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну вартість всіх товарів у масиві, яка розраховується як добуток ціни товару на його кількість, а потім сумується з іншими товарами.
//  Результат повинен бути загальною вартістю всіх товарів.

// const products = [
//   { id: 1, name: "T-shirt", price: 20, quantity: 3 }, // 20 * 3 = 60 
//   { id: 2, name: "Jeans", price: 50, quantity: 2 },
//   { id: 3, name: "Sneakers", price: 80, quantity: 1 },
//   { id: 4, name: "Hat", price: 15, quantity: 4 },
//   { id: 5, name: "Socks", price: 5, quantity: 6 },
// ];

// function getTotal(arr) {
//     // return arr.reduce((acc,product ) => {
//     //     const totalPrice = product.price * product.quantity
//     //    return acc + totalPrice
//     // }, 0)


//     return arr.reduce((acc, {price, quantity}) => acc + price * quantity , 0)
// }

// console.log(getTotal(products));


// Task-5
// Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки за роком видання у спадаючому порядку.
// Результат повинен бути відсортованим масивом книжок за роком видання.

// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];

// function sortDesc(arr) {

//     return [...arr].sort((current, next) => next.year - current.year)
// }

// console.log(sortDesc(books));


// Task-6
// Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв продуктів, ціна яких менше 2 доларів та відсортуй їх за алфавітним порядком.

// const products = [
//     { id: 2, name: "Banana", price: 0.99 },
//     { id: 1, name: "Apple", price: 1.99 },
//     { id: 3, name: "Orange", price: 2.49 },
//     { id: 4, name: "Grapes", price: 3.99 },
//   ];
  
//   function getProducts(arr) {
    // return arr.filter(({price}) => price < 0,5)
    // .map(({name}) => name)
    // .sort((a,b) => a.localeCompare(b))
    // .reduce((acc, product, idx) => acc + `${idx + 1} - ${product} \n`, 'Product list: \n')

    // const products = rr.filter(({price}) => price < 0,5)
    // .map(({name}) => name)
    // .sort((a,b) => a.localeCompare(b))
  
    // return  products.reduce((acc, product, idx) => acc + `${idx + 1} - ${product} \n`, products.length ? 'Product list: \n' : "Products not found")

//   }
//   console.log(getProducts(products));
  

// Task-7 HARD 😈

// Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа

// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 3,
//     // ...
// }

// const str = "absdabsrgbadgtdswwbetflg";

// const obj = {}
//  for (let i = 0; i < str.length; i += 1) {
//     if (obj.hasOwnProperty(str[i])) {
//         obj[str[i]] += 1
//     } else{
//         obj[str[i]] = 1
//     }
// }
// console.log(obj)


// const obj = str.split("")
// .reduce((acc, key) => {
//   if (key in acc) {
//     acc[key] += 1;
//   } else {
//     acc[key] = 1;
//   }

//   return acc
// }, {});
// console.log(obj);


//=======================THIS=============================

// **Function declaration**
// 'use strict'

// function fnDeclaration() {
//     console.log(this.fullName);
// }
// fnDeclaration()

// **Function expression**
// 'use strict'
// const fnExpression = function () {
//     console.log(this);
// }

// fnExpression()

// **Arrow function**
// 'use strict'

// const fnArrow = () => {
//     console.log(this);
// }

// fnArrow()
 

// ПРАВИЛА ВИЗНАЧЕННЯ THIS
// 1 Визначити з яким типом функції працюємо
// 2 Маємо умовне поділення на два табори
// 2.1 Перший це Function Declaration & Function Expression
// 2.2 Другий це Arrow Function
// 3 Function Declaration & Function Expression визначають this тим хто їх викликав, перший ліворуч
// 4 Arrow Function в рамках чого вона була створена

// *****Function declaration*****\\
// const person = {
//     name: 'Alice',
//     hello() {
//         console.log(this);
//         console.log(this.name);
//     }
// }
// person.hello()

// *****Function Expression*****\\
// const person = {
//     name: 'Alice', 
//     hello: function () {
//         console.log(this);
//         console.log(this.name);
//     }
// }
// person.hello()


// *****Arrow Function*****\\
// const person = {
//     name: 'Alice',
//     hello: () => {
//         console.log(this);
//     }
// }
// person.hello();

// const person = {
//     name: 'Alice',
//     hello() {
//         console.log(this);

//         const arrowFn = () => {
//             console.log('arrowFn', this);
//         }
//         arrowFn(); 
//     }
// }
// person.hello()

// const arrowFn = () => {
//     console.log('arrowFn', this);
// }

// const person = { 
//     name: 'Alice',
//     arrowFn :() => {
//         console.log('arrowFn', this);
//     },
//     hello() {
//         console.log(this);

//         this.arrowFn();
//     }
// }
// person.hello()

// const objA = {
//     firstName: 'Artem',
//     lastName: 'Rysich',
//     sayHello(){
//         console.log(`${this.firstName} ${this.lastName}` );
//     }
// }
// objA.sayHello

// const objB = {
//     hay: objA.sayHello //sayHello(){
// }
// objB.hay()

// ***********call apply bind*********** \\

// ARROW FUNCTION call apply bind НЕ ПРАЦЮЄ !!!!!!!!!!!!!!!!!!

// *****call***** \\

// const bmw = {
//     brand: 'BMW',
//     speed: 100,
// };

// const audi = {
//     brand: 'Audi',
//     speed: 80,
//   };

//   function drive(action, city) {
//     console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год в місті ${city}. ${action}`);
    
// }

// drive.call(bmw, 'Увімкнути ближнє світло', 'Вінниця'); //перший аргумент майб this для нашої функції, call приймає спимок аргументів
// drive.call(audi, 'Увімкнути клімат-контроль', 'Київ');
// drive()

// *****apply***** \\

// const bmw = {
//     brand: 'BMW',
//     speed: 100,
// };

// const audi = {
//     brand: 'Audi',
//     speed: 80,
// };

// function drive(action, destination) {
//     console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год я рухаюсь в місто ${destination}. ${this.brand} - ${action}`);
// }

// drive.apply(bmw, ['Увімкнути ближне світло', 'Львів']);
// drive.apply(audi, ['Увімкнути клімат-контроль', 'Київ']);

// *****bind***** \\
// робить копію функції і назавжди змінює контекст

// const bmw = {
//     brand: 'BMW',
//     speed: 100,
// };

// function drive(action, destination) {
//     console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год я рухаюсь в місто ${destination}. ${this.brand} - ${action}`);
// }

// const bmwDrive = drive.bind(bmw);
// // console.log(bmwDrive);
// bmwDrive('Увімкнути ближнє світло', 'Львів')
// bmwDrive('Увімкнути клімат-контроль', 'Київ')


// ================================ПРАКТИКА===================

// Task - 1
// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseСontrol з методами accelerate та decrease, властивостями speed та brand.

// const cruiseControl = {
//     speed: 2,
//     brand: "Audi", 
//     accelerate(){
//         this.speed += 10;
//         console.log(
//             `Автомобіль ${this.brand} прискорюється. Поточна швидкість ${this.speed}`)
//     },
//     decrease(){
//         this.speed -= 10

//         if(this.speed <= 0) {
//       console.log(`Авто зупинилось`);
//       this.speed = 0
//       return
// }
// console.log(
//           `Автомобіль ${this.brand} гальмує. Поточна швидкість ${this.speed} `
//         );

//     }
// }

// cruiseControl.accelerate()
// cruiseControl.accelerate()
// cruiseControl.accelerate()
// cruiseControl.accelerate()
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()

// Task - 2
// Потрібно створити систему для продажу в інтернет-магазині.
// В об'єкті продукту (product) потрібно створити метод discount(буде приймати знижку клієнта в %) та повертати вартість товару з врахуванням знижки
// В об'єкті клієнта (client) який містить ім'я та індивідуальну знижку, потрібно створити метод purchase, який буде викликати метод для розрахунку вартості товару та логувати повідомлення про покупку
// Alice придбала товар зі знижкою в 8%, сума до сплати 460грн"

// const product = {
//   name: "Smartphone",
//   price: 500,
//   discount(percent) {
//     return this.price * (100 - percent / 100)
//   },
// };

// product.discount(5)


// const client = {
//   name: "Alice",
//   discountPercent: 8,
//   purchase() {
//     const price = product.discount(this.discountPercent)
//     console.log(`${this.name}  придбала товар зі знижкою в ${this.discountPercent} сума до сплати ${price} %  грн`)
//    console.log(price)
//   },
// };
// client.purchase();

// Task - 3
// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

// const SAFE_SPEED = 60;

// const tesla = {
//   brand: "Tesla",
//   speed: 30,
// };

// const audi = {
//   brand: "Audi",
//   speed: 70,
// };

// const ford = {
//     brand: 'Ford',
//     speed: 90
// }

// function speedSensor(maxSpeed) {
//     if (this.speed <= maxSpeed) {
//     return `Автомобіль ${this.brand} рухається з безпечною швидкістю`
//     }
//     return `${this.brand} перевищило безпечну швидкість`

// } 

// console.log(speedSensor.call(audi, SAFE_SPEED));
// console.log(speedSensor.call(tesla, SAFE_SPEED));
// console.log(speedSensor.call(ford, SAFE_SPEED));


// Task-4 Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
//   ??  => null undefined
//   ||  => 0 '' NaN undefined null false

// const calculator = {
//     read (a, b){
//         this.a = a
//         this.b = b
//     },

//     add (){
//         return (this.a ?? 0) + (this.b ?? 0)
//     },
//     mult(){
//         return (this.a ?? 0) * (this.b ?? 0)
//     }
// }

// calculator.read(3);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());


//================================CLASS 5.2==================

// null - є кінцем і початком всіх прототипів

// const user = {
//   name: "Alice",
//   age: 23,
//   sayHello() {
//     console.log(`Hello my name is ${this.name}`);
//   },
//   getAge() {
//     console.log(`my age ${this.age}`);
//   },
// };
// console.log(user);

// const student = Object.create(user);

// console.log(student);
// student.sayHello()

// student.name = 'kate'
// console.log(student)
// student.sayHello()

// const teacher = Object.create(student)
// teacher.city = "Lviv"
// teacher.sayHello()


// function sayHello (userName) {
//       console.log(`Hello my name is ${userName}`);
// }
// String.prototype.say = sayHello


// String.prototype.replace = function (userName) {
//   console.log(`Hello my name is ${userName}`);
// };

// const str = "test";
// str.say('JS')

// const str1 = "test2"

// str.replace("JS");
// str1.replace('Artem');

// *********************************ES6 Class*********************************\\

// *****Публічні властивості та методи***** \\
// class User {
//     constructor(userName) {
//         this.name = userName;
//     }

//     showName() {
//         console.log(`Hello my name is ${this.name}`);// методи бутипоміщенні тільки прототип
//     }
// }

// const student = new User('Alice'); // ексземпляр класу
// const student1 = new User('Kate');
// console.log(student);
// console.log(student1);
// student.showName()


// *****Приватні властивості та методи***** \\
// class User {
//     #password;
//     constructor(name, password) {
//         this.name = name;
//         this.#password = password;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }

//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }
// }

// const student = new User('Alice', 'qwerty111');
// // student.password = 'abcd'
// console.log(student);
// student.showName()

// ******Геттери і сеттери****** \\

// class User {
//     #password;
//     #email;
//     constructor(name, password, email) {
//         this.name = name;
//         this.#password = password;
//         this.#email = email;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }

//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }

//     get email() {
//         if (this.#checkPassword()) {
//             return this.#email
//         }
//     }

//     set email(newEmail) {
//         if (this.#checkPassword()) {
//             this.#email = newEmail;
//         }
//     }
// }

// const student = new User('Alice', 'qwerty111', 'test@gmail.com');
// console.log(student.email);
// student.email = 'new@gmail.com';


// **********Наслідування класів********* \\

// class User {
//   #password;
//   #email;
//   constructor(name, password, email) {
//     this.name = name;
//     this.#password = password;
//     this.#email = email;
//   }

//   showName() {
//     if (this.#checkPassword()) {
//       console.log(`Hello my name is ${this.name}`);
//     } else {
//       console.log("Who are you ?🧐");
//     }
//   }

//   #checkPassword() {
//     const password = prompt();
//     return password === this.#password;
//   }

//   get email() {
//     if (this.#checkPassword()) {
//       return this.#email;
//     }
//   }

//   set email(newEmail) {
//     if (this.#checkPassword()) {
//       this.#email = newEmail;
//     }
//   }
// }
// constructor(name, password, email) {
//     this.name = name;
//     this.#password = password;
//     this.#email = email;
// }
// class Student extends User {
//     constructor(name, password, email, points) {
//         super(name, password, email) // метод super() викликає батьківський конструктор
//         // super()
//         this.points = points;
//     }
//     getPoints() {
//         console.log(`${this.name} has ${this.points} points`);
//     }
// }

// const student = new Student('Alice', 'qwerty111', 'test@gmail.com', 38);
// // student.showName()
// // student.getPoints()
// console.log(student); 


//=====================Практика==============

//================ Task - 1

// Необхідно створити клас Rectangle, який представляє прямокутник. Клас повинен мати приватні властивості width та height, а також гетери та сетери для цих властивостей. Гетери повинні повертати значення властивостей, а сетери повинні дозволяти змінювати значення властивостей з валідацією.
 
// class Rectangle {
//     #width;
//     #height
//     constructor({ width, height} = {}){
//         this.width = width;
//         this.height = height;
//     }
//         get width(){
//             return   this.#width  
//     }
//         set width (newWidth) {
//             if (typeof newWidth === 'number' && newWidth > 0) {
//             this.width === newWidth
//             } else {
//                 console.log('Ширина має бути числом і більша за 0');

//             }
//         }

//         get height(){
//             return   this.#height  
//     }
//         set width (newHeight) {
//             if (typeof newHeight === 'number' && newHeight > 0) {
//             this.#height === newHeight
//             } else {
//         console.log('Висота має бути числом і більша за 0');

//             }
//         }
// }

// const item = new Rectangle({ width: 10, height: 5 });
// console.log(item);

// console.log(item.width); // get
// item.width = 12 // set
// console.log(item.width); //get


// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).

// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являється випускником).

// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
// Приклад ініціалізації екземпляру класа:

// class User {
//     #name;
//     #surname;
//     constructor(name, surname) {
//         this.#name = name
//         this.#surname = surname
//     }
//     getFullName(){
//         return `${this.#name} ${this.#surname}`
//     }

//  }

//  class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname) // для ініціалізації батьківського конструктора
//         this.year = year
//     }

//     getCourse (){
//         const toDay = new Date()
//         const currentYear = toDay.getFullYear()
//         const diff= currentYear - this.year

//         if (diff > 5){
//             return "Студент являється випускником";
//                 }
//                 return `${diff} курс`;
//     } 
// }

// const student = new Student('Петрик', 'Пяточкин', 2019);
// console.log(student);
// console.log(student.getFullName()); //поверне 'Петрик Пяточкин'
// console.log(student.getCourse()); //поверне 4


// *******Task-3******* \\
// Необхідно створити клас Hero, який представляє героя з гри. Клас повинен мати публічні властивості name, level та health, а також методи attack та heal, що дозволяють герою атакувати та відновлювати здоров'я відповідно.
// Також створи функціонал для підрахунку створених героїв

// Властивість name має зберігати ім'я героя.
// Властивість level має зберігати рівень героя.
// Властивість health має зберігати поточний рівень здоров'я героя.
// Метод attack наносить пошкодження в розмір 10 одиниць.
// Метод heal додає до здоров'я героя 10 одиниць.

// class Hero {
//     static counter = 0
//     static addHero() {
//         // Hero.counter += 1
//         this.counter += 1
//             console.log(`Кількість героїв ${this.counter}`);

//     }
//    #level
//     constructor (name) {
//         this.name = name
//         this.#level = 1
//         this.health = 200
//         Hero.addHero()
//     }

//     attack () {
//             return "Attack with 10 damage";

//     }

//       heal () {
//             this.health += 10;
//   }

// }

// const bloodseker = new Hero("Bloodseker");
//  const bloodseker2 = new Hero("Bloodseker");
// const bloodseker3 = new Hero("Bloodseker");

// console.log(bloodseker);
// console.log(bloodseker.attack());
// console.log(bloodseker.heal());
// console.log(bloodseker);
// console.log(Hero.#counter);


// *******Task-4******* \\
// Необхідно створити клас BankAccount, який представляє банківський рахунок. Клас повинен мати приватну властивість balance, яка представляє баланс рахунку. Клас повинен також мати публічні методи deposit та withdraw, які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку. При цьому balance повинна бути доступна лише в межах класу BankAccount та його приватних методів.


class BankAccount {
    #balance
    constructor(){
    this.#balance = 0
    }

    deposit(amount) {
    if (amount <= 0){
        console.log("Сума має бути більша за НУЛЬ");
        return
    } 

    this.#changeBalance(amount);
    console.log(`Здійснено депозит ${amount}`);
    }

    withdraw(amount){
        if (amount <= 0) {
            console.log("Сума має бути більша за НУЛЬ");
        } else if(amount > this.#balance){
            console.log("Недостатньо коштів на рахунку");

        } else {
        this.#changeBalance(-amount) 
        console.log(`Знято ${amount}`);
    }

    }


    #changeBalance(amount) {
        this.#balance += amount
    }


}

const instance = new BankAccount();
instance.deposit(100);
instance.deposit(1200);
instance.withdraw(100);
console.log(instance);