//Global Scope: Variables to be declared
var counter = 100;

//Events: Start Game, End Game
	//Start Game: can only happen 1 way, when Start Button is clicked
	document.getElementById("startButton").addEventListener("click", startGame);
	//this is clearly on 'on.click' event, with event listener (above)
	
	//A number of things happen when Start Game is initiated:
	function startGame() {
		//The timer starts running from its set time down toward 0
			//Were it to hit 0, the 'End Game' event would ensue, 
			//no matter if all questions have been filled.
			//Seems like a decrementing setTimeout.

		//The trivia questions and answers are displayed
			//The answers are radio buttons
			//only one of them may be chosen
		//The Done Button is displayed at the bottom
			//If clicked, 'End Game' event ensues

	}
		//The timer starts running from its set time down toward 0
			//Were it to hit 0, the 'End Game' event would ensue, 
			//no matter if all questions have been filled.
			//Seems like a decrementing setTimeout.
		//The trivia questions and answers are displayed
			//The answers are radio buttons
			//only one of them may be chosen
		//The Done Button is displayed at the bottom
			//If clicked, 'End Game' event ensues
	//End Game: can happen 2 ways, as stated above
		//Displays: Correct Answers, Incorrect Answers, Unanswered
			//Must connect question choices to this list