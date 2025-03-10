let createMatrix = prompt("Do you want to create a Matrix? (yes/no)"); // Prompt user for decision to create a matrix
// Using Condition Statement
if (createMatrix.toLowerCase() === "yes") { // Ask user for the limits of 3 following nested loops
    let limit1 = Number(prompt("Enter the limit for the first loop: "));
    let limit2 = Number(prompt("Enter the limit for the second loop: "));
    let limit3 = Number(prompt("Enter the limit for the third loop: "));

    // Ask user for the 3 strings to be printed in the matrix
    let string1 = prompt("Enter the first string (word, char, number, or symbol): ");
    let string2 = prompt("Enter the second string (word, char, number, or symbol): ");
    let string3 = prompt("Enter the third string (word, char, number, or symbol): ");

    console.log("Your matrix:");
    // Create the matrix using nested for loops
    for (let i = 0; i < limit1; i++) {
        for (let j = 0; j < limit2; j++) {
            let row = "";
            for (let k = 0; k < limit3; k++) {
                row += `${string1}${string2}${string3} `;
            }
            console.log(row);
        }
        console.log(""); // Add a line break for better readability
    }
} else {
    console.log("Thank you, re-run the program if you changed your mind.");
}
