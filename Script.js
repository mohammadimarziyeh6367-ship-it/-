let studentName = "";
let score = 0;

let correctWords = [
    
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
];

let wrongWords = [
    "باد",
    "سیب",
    "ماه",
    "گربه",
    "گل",
    "خورشید"
];

let allWords = [...correctWords, ...wrongWords];

let selectedCorrect = 0;


// شروع بازی

document.getElementById("startBtn").onclick = function(){

    studentName =
    document.getElementById("studentName").value;

    if(studentName === ""){
        alert("لطفاً نامت را وارد کن 😊");
        return;
    }


    let gender =
    document.querySelector(
        'input[name="gender"]:checked'
    ).value;


    if(gender === "boy"){
        document.getElementById("avatar").innerHTML="👦";
    }
    else{
        document.getElementById("avatar").innerHTML="👧";
    }


    document.getElementById("showName").innerHTML =
    studentName;


    document.getElementById("startPage").style.display="none";

    document.getElementById("gamePage").style.display="block";


    createCards();

};



// ساخت کارت‌ها

function createCards(){

    let box =
    document.getElementById("cards");

    box.innerHTML="";


    allWords.sort(
        ()=> Math.random()-0.5
    );


    allWords.forEach(word=>{


        let card =
        document.createElement("button");


        card.className="wordCard";

        card.innerHTML =
`
<div style="font-size:55px">
${item.emoji}
</div>

<div style="margin-top:10px">
${item.word}
</div>
`;


        card.onclick=function(){

            checkWord(word,card);

        };


        box.appendChild(card);


    });

}



// بررسی جواب

function checkWord(word,card){


    if(card.disabled){
        return;
    }


    card.disabled=true;


    if(correctWords.includes(word)){


        score++;

        selectedCorrect++;


        card.classList.add("correct");

        createStars();

        document.getElementById("message").innerHTML =
        "🌟 آفرین! این کلمه با د شروع می‌شود";

       
        document.querySelector(".speech").innerHTML =
        "👏 عالی بود! یک ستاره گرفتی ⭐";
    }

    else{


        card.classList.add("wrong");


        document.getElementById("message").innerHTML =
        "😊 دوباره فکر کن";

       document.querySelector(".speech").innerHTML =
           
  "😊 دوباره نگاه کن، تو می‌تونی!";

    }


    document.getElementById("score").innerHTML =
    score;


    if(selectedCorrect === correctWords.length){

        finishGame();

    }

}



// پایان بازی

function finishGame(){


document.getElementById("gamePage").style.display="none";

document.getElementById("finishPage").style.display="block";


document.getElementById("resultName").innerHTML =
"آفرین " + studentName + " 👏🏻";


document.getElementById("finalScore").innerHTML =
score + " از " + correctWords.length;


}
function createStars(){

for(let i=0;i<15;i++){

let star=document.createElement("div");

star.innerHTML="⭐";

star.style.position="fixed";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top=Math.random()*window.innerHeight+"px";

star.style.fontSize="30px";

star.style.zIndex="999";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},1000);

}

}
