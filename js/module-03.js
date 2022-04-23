// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//         return "Returning all books";
//     },
//     addBook(bookName) {
//         return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         for (const book of this.books) {
//             if (book === bookName) {
//                 const index = this.books.indexOf(bookName);
//                 this.books.splice(index, 1);
//             }

//         }
//         return `Deleting book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//         for (const book of this.books) {
//             if (book === oldName) {
//                 const index = this.books.indexOf(oldName);
//                 this.books.splice(index, 1, newName)
//             }
//         }
//         return `Updating book ${oldName} to ${newName}`
//     }

//   // Change code above this line
// };

// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// 41.
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками.
// Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.
// {
//     name: "Dragon breath",
//     price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

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
		for (let i = 0; i < this.potions.length; i += 1) {
			const potion = this.potions[i];
			if (newPotion.name === potion.name) {
				return `Error! Potion ${newPotion.name} is already in your inventory!`;
			}
		}
		this.potions.push(newPotion);
		return this.potions;
	},

	removePotion(potionName) {
		for (let i = 0; i < this.potions.length; i += 1) {
			const potion = this.potions[i];
			if (potionName === potion.name) {
				this.potions.splice(i, 1);
				return this.potions;
			}
		}
		return `Potion ${potionName} is not in your inventory!`;
	},

	updatePotionName(oldName, newName) {
		for (let i = 0; i < this.potions.length; i += 1) {
			const potion = this.potions[i];
			if (oldName === potion.name) {
				potion.name = newName;
				return this.potions;
			}
		}
		return `Potion ${oldName} is not in your inventory`;
    },
    // Change code above this line
};

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
