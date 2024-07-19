function makeid(l) {
  // write your code here
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';

    for (let i = 0; i < l; i++) {
        // Generate a random index to select a character from the characters string
        const randomIndex = Math.floor(Math.random() * characters.length);
        // Append the selected character to the result string
        result += characters.charAt(randomIndex);
    }

    return result; 
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
