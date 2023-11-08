
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
  
  const hogvarts = {
    griffindor: [
      {
        name: "Harry",
        points: 17,
      },
      {
        name: "Hermiona",
        points: 19,
      },
      {
        name: "Ron",
        points: 14,
      },
    ],
    slizerin: [
      {
        name: "Draco",
        points: 17,
      },
      {
        name: "Goyl",
        points: 14,
      },
      {
        name: "Crabbe",
        points: 5,
      },
    ],

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

    getTotalPoints(faculty){
        if (!this.hasOwnProperty(faculty)){
                    return 'Not found'
                }
                let totalPoints = 0;
                for (const student of this[faculty]){
                    totalPoints += student.points
                }
                return totalPoints
    }

}

    
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