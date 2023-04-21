// import the readline-sync package
import readline from "readline-sync";

// set a flag to indicate if the user has quit the program
let userHasQuit = false;

// set the bot's default name
let bot = "Frank";

// keep track of the number of questions asked
let questions = 0;

// display a welcome message and instructions for using the bot
console.log("Hi! I am a dumb chat bot. You can check all the things I can do by typing 'help'.");

// loop until the user has quit the program
while (!userHasQuit) {

	// wait for user input and store it in a variable
	let answer = readline.question();

	// check the user's input against a list of possible commands
	if (answer == "help") {

		// if the user typed "help", call the help() function
		help();
		// increment the question counter
		incrementQuestionCounter();

	} else if (answer == "hello") {

		// if the user typed "hello", call the hello() function
		hello();
		// increment the question counter
		incrementQuestionCounter();

	} else if (answer == "botInfo") {

		// if the user typed "botInfo", call the botInfo() function
		botInfo();
		// increment the question counter
		incrementQuestionCounter();

	} else if (answer == "botName") {

		// if the user typed "botName", call the botName() function
		botName();
		// increment the question counter
		incrementQuestionCounter();

	} else if (answer == "botRename") {

		// if the user typed "botRename", call the botRename() function
		botRename();
		// increment the question counter
		incrementQuestionCounter();

	} else if (answer == "forecast") {

		// if the user typed "forecast", call the forecast() function
		forecast();
		// increment the question counter
		incrementQuestionCounter();

	} else if (answer == "quit") {

		// if the user typed "quit", set the userHasQuit flag to true
		userHasQuit = true;

	}
}

// define the forecast() function that generates a random weather forecast
function forecast () {

	// set the minimum and maximum for the possible temperature values
	let max = 30;
	let min = -30;

	// generate a random temperature value within the range of min and max
	let temperature = Math.floor(Math.random() * (max - min + 1) + min);

	// generate a random value to determine if it will be cloudy, sunny or windy
	let cloudy = Math.random() < 0.5 ? "yes": "no";
	let sunny = Math.random() < 0.5 ? "yes": "no";
	let windy = Math.random() < 0.5 ? "yes": "no";

	// combine the generated weather variables into a string
	let forecast = "Tomorrows weather will be....\n"
        + "Temperature: " + temperature + " celsius degrees\n" 
        + "Cloudy: " + cloudy + "\n"
        + "Sunny: " + sunny + "\n"
        + "Windy: " + windy;

	// output the forecast
	console.log(forecast);
}

// define the botRename() function that asks the user to rename the bot and sets the bot name to user input
function botRename () {

	// ask user for a new name
	let name = readline.question("Type my new name, please.");

	// confirm with user that they're happy with the new name
	let nameOK = readline.question("Are you happy with the name " + name + "?");
	
	// if user confirms, set the bot name to the new name
	if (nameOK == "yes") {
		bot = name;
		console.log("I was renamed to " + bot);
	} 
	// otherwise, keep the original bot name
	else { 
		console.log("Name not changed. My name is " + bot);
	}
}

// define the botName() function that outputs the current bot name to the console
function botName () {
	console.log("My name is currently " + bot + ". If you want to change it, type botRename.");
}

// define the botInfo() function that outputs information about the bot to the console
function botInfo () {
	console.log("I am a dumb bot. You can ask me almost anything :). You have already asked me " + questions + " question(s).");
}

// define the hello() function that greets the user with their name
function hello () {

	// ask the user for their name
	let name = readline.question("What is your name?");

	// output greeting with user's name
	console.log("Hello there, " + name + "!");
}

// define the help() function that outputs a list of available commands and their functions
function help () {
	let helpText = 
`-----------------------------
Here's a list of commands that I can execute!

help: Opens this dialog.
hello: I will say hello to you
botInfo: I will introduce myself
botName: I will tell my name
botRename: You can rename me
forecast: I will forecast tomorrows weather 100% accurately
quit: Quits the program.
-----------------------------`;
	console.log(helpText);
}

// define the incrementQuestionCounter() function that increments the number of questions asked
function incrementQuestionCounter () {
	++questions;
}