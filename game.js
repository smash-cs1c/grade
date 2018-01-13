/** Function to play a game of guessing random number! */


// This tells the button what to do. document.ready tells it to wait until page is loaded.
window.onload = function() {
  var button = document.getElementById("button-guess");
  button.addEventListener('click', onCalculateButtonClicked
    , false);
};

// this function takes in the fact the button was called and
// grabs the value to pass into your calculation.
function onCalculateButtonClicked
() {
  //gets the value from document
  var score = document.getElementById('grade-score').value;
  //gets the score
  var grade = calculateGrade(score);
  // puts the score back on the page
  document.getElementById("results").textContent = grade;
}

// your function returns:
// their grade as a letter from percentage
// example:
// calculateGrade(89) => "B+"
// calculateGrade(91) => "A-"

function calculateGrade(score) {
  return 'A+';
}
