/*eslint-env browser*/

// Step 1, 2
/*
function Cat() {
    "use strict";
}
var calico = new Cat();

var Dog = function () {
    "use strict";
};
var poodle = new Dog();
*/

// Step 3
/*
function Animal() {
    "use strict";
    window.document.write("The Animal has been created.");
}
var create = new Animal();
*/

// Step 4
/*
function Animal() {
    "use strict";
    window.document.write("The Animal has been created.");
}
var create = new Animal();
window.console.log(create.constructor);
*/

// Step 5, 6

function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    window.console.log(this.type + "\n" + this.breed + "\n" + this.color + "\n" + this.height + "\n" + this.length);
}
var newAnimal = new Animal("Bird", "Parakeet", "Orange", "3 Feet", "2 Feet");