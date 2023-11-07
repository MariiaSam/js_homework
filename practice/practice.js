
// ********************ЦИКЛИ******************** 2 ЗАНЯТТЯ


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

// Золоте правило -перевіряємо в НИЖНЬОМУ РЕГІСТРІ!!!


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




