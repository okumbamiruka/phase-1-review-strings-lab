// Write your code in this file!
const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

const [firstName, lastName] = currentUser.split(' ');
const firstNameInitial = firstName.charAt(0); // Get the first character of the first name
const output = firstNameInitial + ' ' + lastName; // Concatenate the first character of the first name with the last name
const shortGreeting = `Welcome, ${output}!`;

console.log(shortGreeting)