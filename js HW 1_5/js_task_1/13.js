/*Функція isAdult оголошує один параметр age (вік), значення якого буде задаватися під час її виклику. Присвой змінній passed вираз перевірки віку користувача на повноліття. Людина вважається повнолітньою у віці 18 років і старше.

Оголошена функція isAdult(age)
У виразі перевірки використовується оператор >=
Виклик isAdult(20) повертає true
Виклик isAdult(14) повертає false
Виклик isAdult(8) повертає false
Виклик isAdult(37) повертає true*/

function isAdult(age) {
    const passed = age >= 18;
  
    return passed;
  }
  
  console.log(isAdult(20));
  console.log(isAdult(14));
  console.log(isAdult(8));
  console.log(isAdult(37));

  /*Використовується для порівняння двох значень. Результатом свого виконання повертають буль - true або false, тобто «так» або «ні».

> - більше
< - менше
>= - більше або дорівнює
<= - менше або дорівнює
Важливо запам'ятати терміни складових виразу. + - * / % називаються оператори, а те, на чому вони застосовуються - операнди.
Оператори порівняння
Використовуються для порівняння двох значень. Результатом свого виконання повертають буль - true або false, тобто «так» або «ні».

a > b і a < b - більше/менше
a >= b і a <= b - більше/менше або дорівнює
a == b - рівність
a != b - нерівність
a === b - строга рівність
a !== b - строга нерівність
Оператори рівності
«Нестрогі» оператори рівності == і != виконують перетворення типів порівнюваних значень у число, що може призвести до помилок, особливо у початківців.

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

Порівняння зд одних і тих самих типів даних, тобто числа з числами
рядки з рядками

!!! Якщо порівнюємо  різні види даних (наприклад, "РЯДОК" === число,
повинні привести до одного типу даних 
console.log(Number("25") === 25))
На практиці використовуєо строге порівняння === та якщо знаємо, що різні
типи даних, то приведення до одного

!= все відбувається навпаки
ВІдшуковуємо той випадрк, коли умова буде НЕПРАВДИВА
Також при вик-ні відбувається приведення ДАНИХ

!== Жодного приведення типів не відбувається

Рядки з рядками порівнюємо з табл ЮНІКОДУ

*/