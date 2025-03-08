let userName = prompt("Username: "); // The user prompt or input the username here
let userPassword = prompt("Password: "); // The user prompt or enter the password

if (userName == "FRQuizon" && userPassword == "BagsaksaDSA") {
    alert(`Welcome ${userName}`); // If true, the user's username will appear
} else {
    alert("Maybe Username or Password is Invalid or Does not Match"); // Else, the user's input is invalid.
}