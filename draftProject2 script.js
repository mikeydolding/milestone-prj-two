const questions = [   


 // if(questions[counter].Type==3)

  //{
  
   /*let replacement=questions[counter].Question + '<br>' +
   
   ' Opt 1<input name ="ques" type="radio"><br>' +
  
  'Opt 2<input name ="ques" type="radio"><br>' +
  
  'Opt 3<input name ="ques" type="radio"><br>' +
  
  'Opt 4<input name ="ques" type="radio">'
  
   display.innerHTML=replacement;
  
  }*/
  


  //--This is a multi choice question 
//{




  //Type 1 is Multichoice
  //Type 2 is True or False
  //Type 3 is Multiple choice
 
   
  {Type:1,Question: " Which of the following is not true in relation to unilateral contracts ",
   a:5,b:6,c:7,d:10,correct:[5,6]},
 
  {Type:2,Question: 
    "True or false, it is an offence to deface a United Kingdom banknote by writing on it?",
   a:true,b:false,correct:false},
 
  {Type:3,Question: 
    " Which of the following is not correct in relation to withdrawing an offer",
   a:8,b:6,c:7,d:9,correct:7},
 
   

{Type:1,Question : " Which of the following is not true in relation to unilateral contracts ",


a: "Only one party makes a promise",
 b: "Acceptance requires full performanceof the contract",
   
  c: "The offeror may withdraw the offerat anytime before acceptance takes place",

  d: " The offeree need not communicate their intention to accept the offer",

  correct : "c"},



 

{  //true or false
Type: 2,  Question : 
    "True or false, it is an offence to deface a United Kingdom banknote by writing on it?" ,

correct : "True"

},



//multiple choice
{ Type:3,   

Question: " Which of the following is not correct in relation to withdrawing an offer",


a:"An offeror is free to withdraw at any time before acceptance takes place",

 b:"The offeror may withdraw the offer within a reasonable time after acceptance",

  c:"The postal rule does not apply to letters of revocation",

  d:"An offeror can not withdraw an offer where a deposit has been paid",
   
correct:"a"
}
]
