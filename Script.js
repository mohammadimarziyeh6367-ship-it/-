alert("بازی آماده است");

let studentName = "";
let score = 0;
let selectedCorrect = 0;

const words = [

{word:"دَر",emoji:"🚪",correct:true},
{word:"دریا",emoji:"🌊",correct:true},
{word:"دوست",emoji:"🤝",correct:true},
{word:"دندان",emoji:"🦷",correct:true},
{word:"دست",emoji:"✋",correct:true},
{word:"دارکوب",emoji:"🐦",correct:true},
{word:"درخت",emoji:"🌳",correct:true},
{word:"دیوار",emoji:"🧱",correct:true},
{word:"دارو",emoji:"💊",correct:true},
{word:"دُلمه",emoji:"🍲",correct:true},
{word:"داغ",emoji:"🔥",correct:true},
{word:"دِل‌درد",emoji:"❤️",correct:true},

{word:"باد",emoji:"🌬️",correct:false},
{word:"سیب",emoji:"🍎",correct:false},
{word:"ماه",emoji:"🌙",correct:false},
{word:"گربه",emoji:"🐱",correct:false},
{word:"گل",emoji:"🌸",correct:false},
{word:"خورشید",emoji:"☀️",correct:false}

];

document.getElementById("startBtn").onclick=function(){

studentName=document.getElementById("studentName").value;

if(studentName==""){

alert("نامت را وارد کن 🌸");

return;

}

let gender=document.querySelector('input[name="gender"]:checked').value;

document.getElementById("avatar").innerHTML=

gender=="boy" ? "👦":"👧";

document.getElementById("showName").innerHTML=studentName;

document.getElementById("startPage").style.display="none";

document.getElementById("gamePage").style.display="block";

createCards();

}

function createCards(){

let box=document.getElementById("cards");

box.innerHTML="";

words.sort(()=>Math.random()-0.5);

words.forEach(item=>{

let card=document.createElement("button");

card.className="wordCard";

card.innerHTML=

item.emoji+"<br>"+item.word;

card.onclick=function(){

checkWord(item,card);

};

box.appendChild(card);

});

}

function checkWord(item,card){

if(card.disabled)return;

card.disabled=true;

if(item.correct){

score++;

selectedCorrect++;

card.classList.add("correct");

document.getElementById("message").innerHTML=

"🌟 آفرین";

}

else{

card.classList.add("wrong");

document.getElementById("message").innerHTML=

"😊 دوباره تلاش کن";

}

document.getElementById("score").innerHTML=score;

if(selectedCorrect==12){

finishGame();

}

}

function finishGame(){

document.getElementById("gamePage").style.display="none";

document.getElementById("finishPage").style.display="block";

document.getElementById("resultName").innerHTML=

"آفرین "+studentName+" 👏";

document.getElementById("finalScore").innerHTML=

score+" از 12";

}
