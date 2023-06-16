/*Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення. Змінна pricePerItem зберігає ціну однієї одиниці товару, а orderedQuantity - кількість одиниць товару в замовленні.

Оголошена змінна pricePerItem
Значення змінної pricePerItem - це число 3500
Оголошена змінна orderedQuantity
Значення змінної orderedQuantity - це число 4
Оголошена змінна totalPrice
Значення змінної totalPrice - це число 14000
Використаний оператор **/


const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = (pricePerItem * orderedQuantity);

/*
Умовні оператори
Умовні оператори призначенні для виконання певного коду якщо виконується вказана умова, а точніше умова є істиною (true).

У JavaScript є три умовних оператори:
if
switch
тернарний ?:
Умовний перевіряє чи є умова істиною (true, тип Boolean), якщо так то виконується відповідний код. Також можна виконати інший код якщо умова не виконуєть (дорівнює false).

Приклад умовного оператора if:

if(3>1) alert('три більше один');
else alert('три не більше один');
==
== - порівняння. Використовується якщо потрібно порівняти обидва значення.

var x=3, y=3;
if(x == y) alert('x дорівнює y');
Не плутайте порівняння == з присвоюванням = .

===
=== - подвійне порівняння. Подвійне порівняння використовується для більш точного порівняння.

Наприклад якщо порівнювати число 5 і рядок "5" то == дорівнює true, а при === дорівнює false:

var x=5, y="5";

if(x == y) alert('5=="5" - true');

if(x === y) alert('5==="5" - true');
else alert('5==="5" - false');
<
< - менше. Перевіряє чи є значення меншим.

var x=3, y=4;
if(x < y) alert('x менше y');

Якщо значення є символ то порівнюється UTF-8 код символ.


var x="а",y="б";
if(x < y)alert('"а" менше "б"');
Аналогічно буде якщо використовувати метод String.charCodeAt:


var x="а",y="б";
if(x.charCodeAt(0) < y.charCodeAt(0))alert('"а" менше "б"');

<=

<= - менше або рівне. Перевіряє чи є значення меншим або рівним.
var x=3, y=4;
if(x <= y) alert('x менше або рівне y');

Зверніть увагу якщо написати =< то це буде помилкою.

>
> - більше. Перевіряє чи є значення більше.

var x=5, y=1;
if(x > y) alert('x більше y');

var x="а", y="б";
if(y>x)alert('"б" більше "а"');

>=

>= - більше рівне. Перевіряє чи є значення більше або рівне.

var x=3,y=3;
if(x <= y)alert('x менше або рівне y');
Зверніть увагу якщо написати => то це буде помилкою.

Для умовних операторів часто використовуються логічні оператори І, АБО, НЕ.

var x=false;
if(!x)alert('істина');
var x=5;
if(x>3 && x<6) alert('x більше 3 і менше 6');
var x=5;
if(x>8 || x<6) alert('x більше 8 або менше 6');


===========

Оператор	Описание	Примеры, возвращающие true
Равно (==)	Возвращает true, если операнды равны.	3 == var1 "3" == var1 3 == '3'

Не равно (!=)	Возвращает true, если операнды не равны.	var1 != 4 var2 != "3"

Строго равно (===)	Возвращает true, если операнды равны и имеют одинаковый тип. Смотрите также Object.is и sameness in JS.	3 === var1

Строго не равно(!==)	Возвращает true, если операнды не равны и/или имеют разный тип.	var1 !== "3" 3 !== '3'

Больше (>)	Возвращает true, если операнд слева больше операнда справа.	var2 > var1 "12" > 2

Больше или равно (>=)	Возвращает true, если операнд слева больше или равен операнду справа.	var2 >= var1 var1 >= 3

Меньше (<)	Возвращает true, если операнд слева меньше операнда справа.	var1 < var2 "2" < 12

Меньше или равно (<=)	Возвращает true, если операнд слева меньше или равен операнду справа.	var1 <= var2 var2 <= 5

*/