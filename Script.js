console.log("script OK");
let studentName = "";
let score = 0;


const words = [

{word:"دَر", emoji:"🚪", correct:true},
{word:"دریا", emoji:"🌊", correct:true},
{word:"دوست", emoji:"🤝", correct:true},
{word:"دندان", emoji:"🦷", correct:true},
{word:"دست", emoji:"✋", correct:true},
{word:"دارکوب", emoji:"🐦", correct:true},
{word:"درخت", emoji:"🌳", correct:true},

{word:"باد", emoji:"🌬️", correct:false},
{word:"سیب", emoji:"🍎", correct:false},
{word:"گل", emoji:"🌸", correct:false}

];


document.getElementById("startBtn").onclick = function(){

studentName =
document.getElementById("studentName").value;


if(studentName==""){

alert("نامت را وارد کن");

return;

}


document.getElementById("startPage").style.display="none";

document.getElementById("gamePage").style.display="block";


createCards();
console.log("cards created");
};



function createCards(){


let box=document.getElementById("cards");

box.innerHTML="";


words.sort(()=>Math.random()-0.5);


words.forEach(item=>{


let card=document.createElement("button");


card.className="wordCard";


card.innerHTML=
  
item.word;

card.onclick=function(){


if(item.correct){


score++;

card.classList.add("correct");

document.getElementById("message").innerHTML=
"🌟 آفرین درست بود";


}

else{


card.classList.add("wrong");

document.getElementById("message").innerHTML=
"😊 دوباره تلاش کن";


}


document.getElementById("score").innerHTML=score;


};


box.appendChild(card);


});


}
