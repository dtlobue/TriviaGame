// Advanced Trivia Pseudocode:
// Any Global Variables (arrays/objects of questions?)
var counter = 30;
var firstQ = {
	question: "Which New Wave artist from the UK wrote the hit single 'Cars'?",
	one: "Colin Newman",
	two: "Gary Numan",
	three: "Adam Ant",
  four: "Morrissey"
};

function startGame() {
	$(#questionBox).text(firstQ);
};



// Initial Page has Start Button that initiates first round/question
$('#startButton').on('click', function(event) {
	startGame();
});
// Should startGame be a function? Usable for "Start Over?", below


// One question shown at a time. Each question has a timer counting down, four
// potential answers (that are clickable)

// Each question leads to a declaration on the page; wrong answers will say
// "Nope!" and display the correct answer, possibly with image. Correct answers
// will declare "Correct!". A brief interval will ensue (about 5 secs). After
// both, the page will transition to the next question WITHOUT user input
// (i.e, using set Timeout). Also, if the timer runs
// out, it will declare "Out of Time!" and also display correct answer.

// End of Game: timer stops counting down and page displays Correct, Incorrect,
// and Unanswered questions. Thus, there must be some kind of recording going on
// while user is playing. The end page also has a "Start Over?" button that will
// start the game over again WITHOUT reloading the page, much like the Start
// Button at the beginning.
