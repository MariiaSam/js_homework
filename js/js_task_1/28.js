/*
Функція checkPassword(password) отримує пароль в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

Якщо значення параметра password:

дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
не задовольняє жодну з попередніх умов, у змінну message записується рядок "Access denied, wrong password!".
Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок default (аналог else).

Оголошена функція checkPassword(password)
Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
Виклик checkPassword(null) повертає "Canceled by user!"
Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
Виклик checkPassword("jqueryismyjam") повертає "Welcome!"
*/
function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
    // Change code below this line
  
    switch (password) {
      case null:
        message = 'Canceled by user!';
        break;
  
      case ADMIN_PASSWORD:
        message = 'Welcome!';
        break;
  
      default:
        message = 'Access denied, wrong password!';
      
  
    }
  
    // Change code above this line
    return message;
  }
  

console.log(checkPassword('mangohackzor'));
console.log(checkPassword(null));
console.log(checkPassword('polyhax'));
console.log(checkPassword('jqueryismyjam'));

/*Оператор break після блоку default не потрібен,
 оскільки це і так останнє, що буде виконано в switch
 і управління буде передане коду після нього.*/