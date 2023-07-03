// Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає ["Speed potion", "Dragon breath", "Stone skin"]

const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    // Change code below this line
  getPotions() { 
      return this.potions;
    }
    // Change code above this line
  };
  