const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || []; //JSON.parse to JS object

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score); //add the score to the right and sort it high to low
  highScores.splice(5); //cutting off after 5 items

  localStorage.setItem("highScores", JSON.stringify(highScores)); //save as string to JSON
  window.location.assign("/"); //go back to the home page
};
