// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 0
// Умова циклу приводиться до true доти, доки i менше за 4
// На кожній ітерації значення змінної i збільшується на одиницю
// В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
// В тілі циклу for використовується виведення у консоль змінної fruit



const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i+= 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}






// Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно.

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// Для доступу до елементів використовується синтаксис квадратних дужок масив[індекс], де індекс - це значення лічильника циклу від 0 і до останнього індексу масиву, який на одиницю менший за довжину масиву.

// for
// for - цикл, виконує код доки умова дорівнює true.

// Синтаксис:
// for(ініціалізація;умова;крок)
// Параметри:
// ініціалізація - виконує лише один раз, оголошується змінна (змінні) яка необхідна для умови і кроку. Для оголошення використовується var або let.

// умова - умова яка перевіряється при кожному циклі. Якщо умова дорівнює true то виконується код і змінна збільшується на вказаний крок. У випадку коли умова дорівнює false цикл зупиняється.

// крок - виконується кожного разу при повторному виконанні циклу,вказується на скільки збільшується зміна(яка вказується при ініціалізації) після кожного циклу.

// Якщо не вказати параметри циклу то отримаємо вічний цикл for(;;) :

// for(;;){
//  alert('Ой, Ви запустили вічний цикл! :-(');
// }
// Увага не рекомендовано використовувати вічний цикл інакше це призведе до зациклення коду, у випадку коли використовуєте використовуйте оператор break для виходу з циклу.

// Опис:
// Цикл використовується якщо необхідно виконати певний код потрібну кількість разів, пройти масив.

// Також цикл можна зупинити за допомогою оператора break або перейти до наступного проходу цикла за допомогою оператора continue.

// При ініціалізація оголошується змінні за допомогою var або let. Різниця полягає в тому що let оголошує локальну змінну яка доступна лише у області циклу, тоді як за допомогою var змінна доступна за межами циклу.

// for(var a=1;a<3;a++){
// alert('змінна a в циклі: '+a);
// }
// alert('змінна a за циклом оголошена за допомогою var: '+a);
// for(let a=1;a<3;a++){
// alert('змінна a в циклі: '+a);
// }
// alert('змінна a за циклом оголошена за допомогою let: '+a); //Error a is not defined
// Також можна але не рекомендовано при ініціалізації циклу не використовувати var або let:

// for(i=0;i<3;i++) alert(i);
// Якщо оголошувати змінні в ініціалізації циклу без var то може виникнути ситуація що коли викликається інший цикл з оголошеною такоюж назвою зміної то значення зміної зміниться і перший цикл перевіривши вказану умову завершиться швидше ніж очікувалося:

// //функція A
// function A(){
// for(i=1;i<=3;i++){ //цикл функції A від 1 до 3
// alert('A : '+i);
// B(); //викликаємо функцію B
// }
// }

// //функція B
// function B(){
// for(i=1;i<=3;i++){ //цикл функції B від 1 до 3
// alert('B : '+i);
// }
// }

// A(); //виклик функції A
// Приклад:
// for(var i=0;i < 3; i++)
// alert(i);

// for(var x=1; x<10; x=x+2)
// console.log(x);
// for(var i=0, x=1; i<3;i++, x+=2){
// alert('i: '+i+' x: '+x);
// }
// Приклад проходження масиву:

// var mas=[1, 81, 36, 7];
// for(var i=0;i<mas.length;i++){
//   console.log(mas[i]);
// }
// Приклад використання continue у циклі for:

// for(var i=0;i<7;i++){
//   if(i==5) continue; //якщо i==5 тоді переходимо до наступного циклу
//   console.log(i);
// }
// Приклад використання оператора break у циклі for:

// for(var i=0;i<5;i++){
//    if(i==3) break;
//   console.log(i);