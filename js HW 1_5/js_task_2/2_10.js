// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

// Оголошена функція splitMessage(message, delimiter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]


// Метод split(delimiter) дозволяє перетворити рядок на масив, "розбивши" його по роздільнику delimiter. Якщо роздільник - це порожній рядок, отримаємо масив окремих символів. Роздільником може бути один або кілька символів.

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// console.log(message.split(" ")); // ["JavaScript", "essentials"]

function splitMessage(message, delimiter) {
    let words;
    // Change code below this line
  words = message.split(delimiter);
    // Change code above this line
    return words;
  }

  console.log(splitMessage('Mango hurries to the train', ' '));
  console.log(splitMessage('Mango', ''));
  console.log(splitMessage('best_for_week', '_'));
  
// //   метод split() для розбиття рядка message на підрядки за 
// допомогою роздільника delimiter. Потім масив рядків words повертається з функції.