// Для ініціалізації екземпляра в класі є метод constructor. Якщо він неоголошений, створюється конструктор за замовчуванням - порожня функція, яка не змінює екземпляр.

// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
// Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.

// Властивості name та email називаються публічними властивостями, тому що вони будуть власними властивостями об'єкта-екземпляра і до них можна буде отримати доступ, звернувшись через крапку.

class Car {
    // Change code below this line
  constructor(brand, model, price ) {
      // Ініціалізація властивостей екземпляра
      this.brand = brand;
      this.model = model;
     this.price = price;
    }
  
  
    // Change code above this line
  }
  