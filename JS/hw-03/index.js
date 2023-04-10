
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    const {name} = newPotion
      for (let i = 0; i < this.potions.length; i++) {
        if (this.potions[i].name === name) {
          return `Error! Potion ${name} is already in your inventory!`;
          }
          };

      this.potions.push(newPotion);
  },
  removePotion(potionName) {

    for (let i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
        return;
      }
    }
    return `Potion ${potionName} is not in inventory!`;

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
       for (let i = 0; i < this.potions.length; i++) {
          if (this.potions[i].name === oldName) {
            // this.potions.splice(i, 1, newName);
            this.potions[i].name = newName;
            return;
            }
        }
        return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};
// console.log (atTheOldToad.getPotions());
// console.log (atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));

console.log (atTheOldToad.getPotions());
console.log(atTheOldToad.updatePotionName ("Dragon breath", "Polymorth"));
console.log (atTheOldToad.getPotions());