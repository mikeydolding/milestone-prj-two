score = 0;
answers = [];
counter = 0;
const results = document.getElementById("answers");
const questionum = document.getElementById("questionnumber");
const counternum = document.getElementById("counternumber");


function change_score() {
  alert("correct answer  " + questions[counter].correct.toString());
  alert("user answer is " + userAnswer.toString());
  const userAnswer = document.getElementsByClassname("A");
  if (userAnswer.toString() == questions[counter].correct.toString()) {
    score = scrore + 1;
    alert("Score is now" + score);
  }
}

function lastpage() {
  for (let i = 0; i < counter.length; i++) {
    results.innerHTML = answers[i];
  }
  let replacement = "<h1> Quiz completed </h1>";
  let display = document.querySelector("#content");
  display.innerHTML = replacement;

}

function startagain() {
  window.location.href = "index.html";
  answers = [];
  counter = 0;
  results.innerHTML = "";
}
function displaynextquestion() {
  counter++;
  if (counter == questions.length) {
    lastpage();
  }
  if (counter < questions.length) 
  displayquestion();
  results.innerHTML = answers;
  questionum.innerHTML = questions[counter].Type
  counternum.innerHTML = counter + 1

}
function displaypreviousquestion() {
  if (counter > 0) counter--;
  displayquestion();
  questionum.innerHTML = questions[counter].Type
  counternum.innerHTML = counter + 1

}

function displayfirstquestion() {
  displayquestion();
  questionum.innerHTML = questions[counter].Type
  counternum.innerHTML = counter + 1
}

function checkanswer() {
  change_score();
  if (questions[counter].Type == 1) {
    const list = document.getElementsByClassName("A");
    if (list[0].checked == true) {
      alert("You have been chosen A");

      alert("you have been entered" + list);
    }

    alert("Right answer is C");
  }

  if (questions[counter].Type == 2) {
    alert("Right answer is False");
  }

  if (questions[counter].Type == 3) {
    alert("Right answer is A");
  }
}

//function prevquestion() {
//  counter = counter - 1;
//}

function recordanswer(element, user_choice) {
  answers[counter] = user_choice;
  for (let i = 0; i < counter.length; i++) {
    results.innerHTML = answers[i];
  }
}

function displayquestion() {
  console.log("number of questions=" + questions.length);
  let display = document.querySelector("#content");
  if (questions[counter].Type == 1) {
    let replacement =
      '<div class="item"></div> <div class="item"> </div> <div class="item"> ' +
      questions[counter].Question +
      " </div>" +
      '<div class="item"> A </div> <div class="item" > <input name ="ques" type="checkbox" onclick="recordanswer(this,questions[counter].a)"> </div> <div class="item">' +
      questions[counter].a +
      " </div>" +
      '<div class="item"> B </div> <div class="item"> <input name ="ques" type="checkbox" onclick="recordanswer(this,questions[counter].b)"> </div> <div class="item">' +
      questions[counter].b +
      " </div>" +
      '<div class="item"> C </div> <div class="item ""> <input name ="ques" type="checkbox" onclick="recordanswer(this,questions[counter].c)"> </div> <div class="item">' +
      questions[counter].c +
      "</div>" +
      '<div class= "item"> D </div> <div class="item" > <input name ="ques" type="checkbox" onclick="recordanswer(this,questions[counter].d)"> </div> <div class="item">' +
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
      '<div class="item"> A </div> <div class="item" > <input name ="ques" type="radio" onclick="recordanswer(this,questions[counter].a)"> </div> <div class="item">' +
      questions[counter].a +
      " </div>" +
      '<div class="item"> B </div> <div class="item"> <input name ="ques" type="radio" onclick="recordanswer(this,questions[counter].b)"> </div> <div class="item">' +
      questions[counter].b +
      " </div>";
    display.innerHTML = replacement;
  }

  if (questions[counter].Type == 3) {
    let replacement =
      '<div class="item"> </div> <div class="item"> </div> <div class="item"> ' +
      questions[counter].Question +
      "  </div>" +
      '<div class="item"> A </div> <div class="item" > <input name ="ques" type="radio" onclick="recordanswer(this,questions[counter].a)"> </div> <div class="item">' +
      questions[counter].a +
      " </div>" +
      '<div class="item"> B </div> <div class="item"> <input name ="ques" type="radio" onclick="recordanswer(this,questions[counter].b)"> </div> <div class="item">' +
      questions[counter].b +
      " </div>" +
      '<div class="item"> C </div> <div class="item ""> <input name ="ques" type="radio" onclick="recordanswer(this,questions[counter].c)"> </div> <div class="item">' +
      questions[counter].c +
      "</div>" +
      '<div class= "item"> D </div> <div class="item" > <input name ="ques" type="radio" onclick="recordanswer(this,questions[counter].d)"> </div> <div class="item">' +
      questions[counter].d +
      "</div>";
    display.innerHTML = replacement;
  }
}
