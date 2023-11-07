

// Завдання 40/41
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Після першого виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), у властивості potions буде масив ["Speed potion", "Polymorth", "Stone skin"]
// Після другого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"), у властивості potions буде масив ["Speed potion", "Polymorth", "Invisibility"]

const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    updatePotionName(oldName, newName) {
      // Change code below this line
     const indexPotions = this.potions.indexOf(oldName);
        if (indexPotions !== -1) {
          this.potions[indexPotions] = newName;
        }
    
  
      // Change code above this line
    },
  };
  