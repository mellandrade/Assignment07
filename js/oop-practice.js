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
/*
var Animal = function (type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    this.writeMessage = function () {
        window.console.log(this.type + "\n" + this.breed + "\n" + this.color + "\n" + this.height + "\n" + this.length);
    };
};
var property, newAnimal = new Animal();
for (property in newAnimal) {
    window.console.log("Bird" + "\n" + "Parakeet" + "\n" + "Orange" + "\n" + "3 Feet" + "\n" + "2 Feet");
}
*/

// Step 7

function Animal(color) {
    "use strict";
    this.color = color;
    Animal.prototype.speak = function () {
        return this.color;
    };
    var speak = function () {
        if (this.color === "red") {
            return "The red cat is meowing!";
        } else {
            return "The blue dog is barking!";
        }
    };
}
window.console.log(this.speak);

/*
Animal.prototype.speakAnimal = function () {
    "use strict";
    if (this.speak === "dog") {
        return "The <color> dog is barking!";
    } else {
        if (this.speak === "cat") {
            return "The <color> cat is meowing!";
        }
    }
};
window.console.log(this.speak); */

//  var cat = new Animal("red");
//  var dog = new Animal("blue");