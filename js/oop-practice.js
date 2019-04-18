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

// Step 7, 8
/*
function Animal(color) {
    "use strict";
   // var color = color;
    this.color = color;
    //Animal.prototype.speak = function () {
      //  return this.color;
    //};
    var speak = function () {
        if (this.color === "red") {
            window.console.log("The red cat is meowing!");
        } else if (this.color === "blue") {
            window.console.log("The blue dog is barking!");
        }
    };
}
window.console.log(this.color("red"));

/* Animal.prototype.speakAnimal = function () {
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

// Step 9 

var findWords = "animal";
var close = "I don't wanna be somebody without your body close to me. And if it wasn't you, I wouldn't want anybody close to me, Cause I'm an animal, animal, like animal, like you."
var i = 0;
var occur = -1;
var j = -1;

while (i != -1) {
    i = close.indexOf(findWords, j + 1);
    occur =+ 1;
    j = i;
}
window.alert("There were " + occur + " occurrences of " + findWords + " in the paragraph.");