 const user = {
    username: "bhawana",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to my website`);
        console.log(this);
    }
};

user.welcomeMessage();

user.username = "sam";
user.welcomeMessage();

console.log(this);

// Regular function
function myFirst() {
    console.log(this);
}
myFirst();

// Function expression
const myCode = function () {
    let username = "hitesh";
    console.log(this.username); // undefined
};
myCode();

// Arrow function
const myArrow = () => {
    let username = "hitesh";
    console.log(this.username); // undefined
};
myArrow();

// Explicit return
const addTwo1 = (num1, num2) => {
    return num1 + num2;
};

console.log(addTwo1(3, 4)); // 7

// Implicit return
const addTwo2 = (num1, num2) => num1 + num2;

console.log(addTwo2(3, 4)); // 7

// Returning an object
const addTwo3 = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo3(3, 4));