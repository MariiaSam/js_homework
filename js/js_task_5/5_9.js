// Для роботи з властивостями майбутнього екземпляра використовуються методи класу. Методи - це просто функції, але з однією відмінністю - вони доступні екземпляру класу.

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

class Car {
    constructor({ brand, model, price }) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
    // Change code below this line
  
   // Метод getEmail
    getPrice() {
      return this.price;
    }
  
    // Метод changeEmail
    changePrice(newPrice) {
      this.price = newPrice;
    }
  
    // Change code above this line
  }
  