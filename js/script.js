

score=0 
function change_score()
{

alert("correct answer  " + questions[counter].correct.toString());
alert("user answer is "+ userAnswer.toString());
const userAnswer=document.getElementsByClassname("A")
if(userAnswer.toString()==questions[counter].correct.toString())
{

 
score=scrore+1;
alert("Score is now"+ score);
  

}






}




function lastpage()



{ 

  let replacement="<h1> Quiz completed </h1>"; 
  let display= document.querySelector("#content");
  display.innerHTML=replacement;
}


  function startagain()
  {
    window.location.href="index.html";

  }
function displaynextquestion()
{
  counter++;
  if(counter==questions.length)
  { 
    lastpage();
  }
if(counter<questions.length-1)
	counter++;
//counter=0;
displayquestion();
}
function displaypreviousquestion()
{
if(counter>0)
	counter--;
displayquestion();
}


function displayfirstquestion()
{
counter=0;
displayquestion();

}

function checkanswer()
{ //alert(questions[counter].correct);
  change_score();
    if(questions [counter].Type==1)
  {


const list = document.getElementsByClassName("A");
if (list [0].checked==true)

{ 
  alert("You have been chosen A");

  alert("you have been entered" + list); 


}





    alert("Right answer is C");
  }
  
   if(questions [counter].Type==2)
    {
    alert("Right answer is False");
    }


    if(questions [counter].Type==3)
    {
    alert("Right answer is A");
    }

  }
//if(questions[counter].Type==1)
 // {
/*console.log("inside  checkanswer()")
console.log("current question="+counter)
 console.log("questions[counter].Type"+questions[counter].Type)
 console.log("questions[counter].Question"+questions[counter].Question)
 console.log("questions[counter].correct="+questions[counter].correct)
   //alert("questions[counter].correct.length="+questions[counter].correct.length)
 // }*/
//} 


//counter=0;
function prevquestion()
{

  counter = counter -1 ;
}

//questions=[
 //Type 1 is Multichoice
 //Type 2 is True or False
 //Type 3 is Multiple choice
//{Type:1,Question: "what which are even numbers", a:5,b:6,c:7,d:9,correct:[5,6]},
 //{Type:2,Question: "what is 2 + 3", a:true,b:false,correct:false},
 //{Type:3,Question: "which is a prime number", a:8,b:6,c:7,d:9,correct:7},
  //{Type:3,Question: "which is a square number", a:5,b:6,c:7,d:9,correct:7}
//]
function recordanswer(element,user_choice)
{
 alert("answer= " + user_choice) 
//alert("Question No= " + counter +" YOU CHOSE " + element.checked + " Type= " + questions[counter].Type + " Correct answer=" + questions[counter].correct);
}
function displayquestion()
{
//counter++;
console.log("number of questions="+questions.length)
 let display=document.querySelector("#content");
if(questions[counter].Type==1)
{
  let replacement= '<div class="item"></div> <div class="item"> </div> <div class="item"> ' + questions[counter].Question + ' </div>' +
 '<div class="item"> A </div> <div class="item" > <input name ="ques" type="checkbox" onclick="recordanswer(this,1)"> </div> <div class="item">' +  questions[counter].a + ' </div>'+
  '<div class="item"> B </div> <div class="item"> <input name ="ques" type="checkbox" onclick="recordanswer(this,2)"> </div> <div class="item">' +  questions[counter].b + ' </div>'+   
  '<div class="item"> C </div> <div class="item ""> <input name ="ques" type="checkbox" onclick="recordanswer(this,3)"> </div> <div class="item">' +  questions[counter].c + '</div>'+
  '<div class= "item"> D </div> <div class="item" > <input name ="ques" type="checkbox" onclick="recordanswer(this,4)"> </div> <div class="item">' +  questions[counter].d + '</div>'

		/*
			 let replacement=questions[counter].Question + '<br>' + 
			 'A<input name ="ques" type="checkbox">' +  questions[counter].a + '<br>'+
			 'B<input name ="ques" type="checkbox">' +  questions[counter].b + '<br>'+
			 'C<input name ="ques" type="checkbox">' +  questions[counter].c + '<br>'+
 			'D<input name ="ques" type="checkbox">' +  questions[counter].d + '<br>'    
		*/
 display.innerHTML=replacement;

}
 
if(questions[counter].Type==2)
{
 let display=document.querySelector("#content");

	 /*let replacement=questions[counter].Question + 
 		'<br>' +' TRUE<input name ="ques" type="radio"><br>' +
		'FALSE<input name ="ques" type="radio"><br>' //+
	*/

//let replacement= '<div class="item"> </div> <div class="item"> a</div> <div class="item">+ questions[counter].Question + '  </div>' +
let replacement= '<div class="item"> </div> <div class="item"> </div> <div class="item">' + questions[counter].Question +  '</div>' +
 '<div class="item"> A </div> <div class="item" > <input name ="ques" type="radio" onclick="recordanswer(this,1)"> </div> <div class="item">' +  questions[counter].a + ' </div>'+
  '<div class="item"> B </div> <div class="item"> <input name ="ques" type="radio" onclick="recordanswer(this,2)"> </div> <div class="item">' +  questions[counter].b + ' </div>'     
display.innerHTML=replacement;
console.log("questions[counter].Question"+questions[counter].Question)
console.log("counter=" + counter);
console.log("questions[counter].a=" + questions[counter].a);
}

if(questions[counter].Type==3)
{
let replacement= '<div class="item"> </div> <div class="item"> </div> <div class="item"> ' + questions[counter].Question + '  </div>' +
 '<div class="item"> A </div> <div class="item" > <input name ="ques" type="radio" onclick="recordanswer(this,1)"> </div> <div class="item">' +  questions[counter].a + ' </div>'+
  '<div class="item"> B </div> <div class="item"> <input name ="ques" type="radio" onclick="recordanswer(this,2)"> </div> <div class="item">' +  questions[counter].b + ' </div>'+   
  '<div class="item"> C </div> <div class="item ""> <input name ="ques" type="radio" onclick="recordanswer(this,3)"> </div> <div class="item">' +  questions[counter].c + '</div>'+
  '<div class= "item"> D </div> <div class="item" > <input name ="ques" type="radio" onclick="recordanswer(this,4)"> </div> <div class="item">' +  questions[counter].d + '</div>'
  display.innerHTML=replacement;
}

}
