// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
function countProps(object) {
    let propCount = 0;
    // Change code below this line
    for (let key in object) {
    if (object.hasOwnProperty(key)) {
   propCount += 1
    }
    }
    // Change code above this line
    return propCount;
  }
  