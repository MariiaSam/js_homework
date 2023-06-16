/*Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, що зберігається у змінній price.

Якщо значення параметра type - це рядок:

"starter" - ціна передплати 0 кредитів.
"professional" - ціна передплати 20 кредитів.
"organization" - ціна передплати 50 кредитів.
Спочатку в тілі функції була інструкція if...else, яка виглядала ось так.

if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}
Після рефакторингу інструкція if..else була замінена на switch. Доповни код інструкції switch, щоб функція працювала правильно.

Оголошена функція getSubscriptionPrice(type)
Виклик getSubscriptionPrice("professional") повертає число 20
Виклик getSubscriptionPrice("organization") повертає число 50
Виклик getSubscriptionPrice("starter") повертає число 0*/


function getSubscriptionPrice(type) {
  let price;

  switch (type) {
    case 'professional':
      price = 20;
      break;

    case 'organization':
      price = 50;
      break;

    case 'starter':
      price = 0;
      break;
  }

  return price;
}

/* switch - умовний оператор, оператор вибору.
switch (значення) {
case ідентифікатор:         
 дія
break;
case ідентифікатор :
 дія
break;
default :
 дія
break;
} 

Параметри:
значення - значення за яким виконується вибір.

ідентифікатор - ідентифікатор з яким порівнюється саме значення.

дія - блок коду(оператори) який виконується якщо значення спів падає з ідентифікатором.

Опис:
switch оператор вибірки. Виконує пошук case з потрібним ідентифікатором (міткою). Якщо потрібний ідентифікатор знайдений виконується код до оператора break.

Оператор break перериває виконання коду. У випадку якщо оператора break немає код виконується до наступного оператопа break або до кінця оператора switch.

Цю можливість можна використовувати якщо потрібно один і такий код при кількох ідентифікаторах або до наступного оператора break.

var x=1;
switch(x){
   case 0: 
      alert('нуль');
   break;
   case 1:
      alert('один');
   case 2: 
      alert('два');
   break;
}
var x=1;
switch(x){
   case 0: 
      alert('нуль');
   break;
   case 1:
   case 2:
      alert('один, два');
   break;
}
default - використовується якщо потрібно виконати певний код коли потрібного ідентифікатора не знайдено.

var x=5;
switch(x){
 case 1: 
    alert('один');
 break;
case 2:
    alert('два');
break;
default:
    alert('упс :-) не 1 і не 2');
break;
}
Оператор if можна вважати аналогом оператор case по вибірці:

var x=1;
switch(x){
case 1: 
   alert('один');
break;
case 2:
   alert('два');
break;
default:
   alert('не один і не два.');
break;
}

аналог за допомогою оператора if:

var x=1;
if(x==1)
   alert('один');
else if(x==2)
   alert('два');
else
   alert('не один і не два.');

У JavaScript не має можливості у switch поставити ідентифікатор типу від 1 до 10 (1..10) тощо. Таку можливість можна досягнути якщо для значення передати true а умови ставити у ідентифікаторі. Тоді switch буде шукати істину умову:

var x=16;

switch(true){
   case x==1:
      x=1;
   break;
   case x>5 && x<10:
      x=x+15;
   break;
   case x>12 && x<19 :
      x=x/2;
   break;
   default:
      x=0;
   break;
}

alert(x);

Приклад:
var bal=8;

switch(bal){
  case 12:
  case 11:
      alert('відмінно');
  break;
  case 10:
  case 9:
  case 8:
      alert('добре');
  break;
  case 7:
  case 6:
      alert('задовільно');
  break;
  case 5:
  case 4:
      alert('погано');
  break;
  case 3:
  case 2:
  case 1:
      alert('дуже погано');
   break;
  default:
      alert('упс');
   break;
}

var x='б';

switch(x){
   case 'а':
      x=1;
   break;
   case 'б':
      x=2;
   break;
   case 'в':
      x=3;
   break;
   default:
      x=0;
   break;
}
alert(x);
Якщо switch використовується у функції то break можна не писати 
у випадку коли використовується return:

function test(x){
switch(x){
  case 1:  return 'один';
  case 2: return 'два';
  case 3: return 'три';
  default: return x;
}
}

alert(test(1)); */
