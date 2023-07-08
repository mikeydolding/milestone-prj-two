var score = [];
var answers = [];
var counter = 0;
const results = document.getElementById("answers");
const finalscore = document.getElementById("score");
const a = "a";
const b = "b";
const c = "c";
const d = "d";

function lastpage() {
  let total = 0;
  for (const value of score) {
    total += value;
  }
 console.log(total)
  for (let i = 0; i < counter.length; i++) {
    results.innerHTML = answers[i];
  }

  let replacement = "<h1> Quiz completed </h1>";
  let display = document.querySelector("#content");
  display.innerHTML = replacement;
  finalscore.innerHTML = total;
}

function startagain() {
  window.location.href = "index.html";
  answers = [];
  counter = 0;
  results.innerHTML = "";
}

function displaynextquestion() {
  counter++;
  console.log(score);
  if (counter == questions.length) {
    lastpage();
  }
  if (counter < questions.length) displayquestion();
  results.innerHTML = answers;
}

function displaypreviousquestion() {
  if (counter > 0) counter--;
  displayquestion();
}

function displayfirstquestion() {
  displayquestion();
}

function recordanswer(element, user_choice, correct_answer) {
  answers[counter] = user_choice;
  if (element == correct_answer) {
    score[counter] = 1;
  } else {
    score[counter] = 0;
  }
  for (let i = 0; i < counter.length; i++) {
    results.innerHTML = answers[i];
  }
}

function displayquestion() {
  let display = document.querySelector("#content");
  if (questions[counter].Type == 1) {
    let replacement =
      '<div class="item"></div> <div class="item"> </div> <div class="item"> ' +
      questions[counter].Question +
      " </div>" +
      '<div class="item"> A </div> <div class="item" > <input name ="ques" type="checkbox" onclick="recordanswer(a,questions[counter].a,questions[counter].correct)"> </div> <div class="item">' +
      questions[counter].a +
      " </div>" +
      '<div class="item"> B </div> <div class="item"> <input name ="ques" type="checkbox" onclick="recordanswer(b,questions[counter].b,questions[counter].correct)"> </div> <div class="item">' +
      questions[counter].b +
      " </div>" +
      '<div class="item"> C </div> <div class="item ""> <input name ="ques" type="checkbox" onclick="recordanswer(c,questions[counter].c,questions[counter].correct)"> </div> <div class="item">' +
      questions[counter].c +
      "</div>" +
      '<div class= "item"> D </div> <div class="item" > <input name ="ques" type="checkbox" onclick="recordanswer(d,questions[counter].d,questions[counter].correct)"> </div> <div class="item">' +
      questions[counter].d +
      "</div>";

    display.innerHTML = replacement;
  }

  if (questions[counter].Type == 2) {
    let display = document.querySelector("#content");
    let replacement =
      '<div class="item"> </div> <div class="item"> </div> <div class="item">' +
      questions[counter].Question +
      "</div>" +
      '<div class="item"> A </div> <div class="item" > <input name ="ques" type="radio" onclick="recordanswer(a,questions[counter].a,questions[counter].correct)"> </div> <div class="item">' +
      questions[counter].a +
      " </div>" +
      '<div class="item"> B </div> <div class="item"> <input name ="ques" type="radio" onclick="recordanswer(b,questions[counter].b,questions[counter].correct)"> </div> <div class="item">' +
      questions[counter].b +
      " </div>";
    display.innerHTML = replacement;
  }

  if (questions[counter].Type == 3) {
    let replacement =
      `<div class="item"> </div> <div class="item"> </div> <div class="item"> ${questions[counter].Question}  </div><div class="item"> A </div> <div class="item" > <input name ="ques" type="checkbox" onclick="recordanswer(a,questions[counter].a,questions[counter].correct)"> </div> <div class="item">${questions[counter].a} </div><div class="item"> B </div> <div class="item"> <input name ="ques" type="checkbox" onclick="recordanswer(b,questions[counter].b,questions[counter].correct)"> </div> <div class="item">${questions[counter].b} </div><div class="item"> C </div> <div class="item ""> <input name ="ques" type="checkbox" onclick="recordanswer(c,questions[counter].c,questions[counter].correct)"> </div> <div class="item">${questions[counter].c}</div><div class= "item"> D </div> <div class="item" > <input name ="ques" type="checkbox" onclick="recordanswer(d,questions[counter].d,questions[counter].correct)"> </div> <div class="item">${questions[counter].d}</div>`;
    display.innerHTML = replacement;
  }
}
