/*Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
Якщо в рядку відсутні заборонені слова, функція повертає буль false.
Оголошена функція checkForSpam(message).
Виклик функції checkForSpam("Latest technology news") повертає false
Виклик функції checkForSpam("JavaScript weekly newsletter")повертає false
Виклик функції checkForSpam("Get best sale offers now!") повертає true
Виклик функції checkForSpam("Amazing SalE, only tonight!") повертає true
Виклик функції checkForSpam("Trust me, this is not a spam message") повертає true
Виклик функції checkForSpam("Get rid of sPaM emails. Our book in on sale!") повертає true
Виклик функції checkForSpam("[SPAM] How to earn fast money?") повертає true?*/

function checkForSpam(message) {
    let result;
  const normalizedMessage = message.toLowerCase();
    result = normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
    
    return result;
  }

//   Логічний оператор || або, Логічні оператори
//   У JavaScript є три логічні оператори:
//   && (І)
//   || (АБО)
//   ! (НЕ)
//   &&
//   && логічний оператор І (AND).
  
//   Повертає true якщо два значення рівні true, інакше повертає false.
  
//   При порівняні:
//   true && true дає true
//   true && false дає false
//   false && true дає false
//   false && false дає false
//   var a = true, b = false;
//   alert( a && b ); //false
//   console.log( true && true); //true
//   console.log( false && true); //false
//   console.log( false && false); //false
//   console.log( true && true && true ); //true
//   console.log( true && true && false ); //false
  
//   ||
//   || логічний оператор АБО (OR).
  
//   Повертає true якщо одне значення рівне true, інакше повертає false.
  
//   При порівняні:
//   true || true дає true
//   true || false дає true
//   false || true дає true
//   false || false дає false