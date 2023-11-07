/*Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

Оголошена функція checkStorage(available, ordered).
Використаний тернарний оператор.
Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
Виклик checkStorage(200, 150) повертає "The order is accepted, our manager will contact you"
Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"*/

function checkStorage(available, ordered) {
    let message;
      message = available < ordered ?  "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
    return message;
 }
  
  

/*Условный (тернарный) оператор
Условный (тернарный) оператор - единственный оператор в JavaScript, 
принимающий три операнда: условие, за которым следует знак вопроса (?), 
затем выражение, которое выполняется, если условие истинно, сопровождается двоеточием (:),
 и, наконец, выражение, которое выполняется, если условие ложно. 
 Он часто используется в качестве сокращённого варианта инструкции if...else.

Синтаксис
условие ? выражение1 : выражение2

Параметры
условие
Выражение, принимающее значение true или false.

выражение1, выражение2
Выражения, значения которых могут принадлежать любому типу.*/
