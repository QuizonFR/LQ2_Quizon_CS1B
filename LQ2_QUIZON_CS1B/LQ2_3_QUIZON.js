// Display the list of choices
console.log("A. Pepsi Cola");
console.log("B. Coca Cola");
console.log("C. Apple (per kg)");
console.log("D Orange (per kg)");
console.log("E. Hotdogs (per kg)");
let itemChoice = prompt("Enter your item choice (A, B, C, D, E): "); // The user will select from the available choices showed above
let quantity = Number(prompt("Enter the amount of the item: ")); // The user will input the quantity of the item chosen
// This will store the price and total price of the chosen item
let price = 0;
let totalPrice = 0;
// Using switch statement to determine the price of the item based on ther user's choice
switch (itemChoice) {
    case "A":
        price = 15; // The price of Pepsi Cola
        totalPrice = price * quantity; // Calculate the price by the quantity and place it inside the totalPrice variable
        alert(`The Total Amount that you ordered = ${totalPrice}`); // Shows the total amount
        break; // Break to prevent continous display
    case "B":
        price = 15; // The price of Coca Cola
        totalPrice = price * quantity;
        alert(`The Total Amount that you ordered = ${totalPrice}`);
        break;
    case "C":
        price = 45; // The price Per kilo of Apples
        totalPrice = price * quantity;
        alert(`The Total Amount that you ordered = ${totalPrice}`);
        break;
    case "D":
        price = 40; // The price Per kilo of Oranges
        totalPrice = price * quantity;
        alert(`The Total Amount that you ordered = ${totalPrice}`);
        break;
    case "E":
        price = 35; // The price Per kilo of Hotdogs
        totalPrice = price * quantity;
        alert(`The Total Amount that you ordered = ${totalPrice}`);
        break;
    default:
        // If the user's input or prompt is invalid
        alert("No item detected! Try Again");
}