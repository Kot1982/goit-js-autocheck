// class StringBuilder {
//     constructor(initialValue) {
//         this.value = initialValue;
//     }
//     getValue() {
//         return this.value;
//     }
//     padStart(str) {
//         this.value = str + this.value;
//     }
//     padEnd(str) {
//         this.value = this.value + str;
//     }
//     padBoth(str) {
//         this.value = str + this.value + str;
//     }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


class Car {
  // Change code below this line

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
  // Change code above this line
}

const mango = new Car({
    brand: "Audi",
    model: "Q3",
    price: 36000
})