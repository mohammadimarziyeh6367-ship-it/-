let studentName = "";
let score = 0;

let correctWords = [
    "دَر",
    "دریا",
    "دوست",
    "دندان",
    "دست",
    "دارکوب",
    "درخت",
    "دیوار",
    "دارو",
    "دُلمه",
    "داغ",
    "دِل‌درد"
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

        card.innerHTML=word;


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


        document.getElementById("message").innerHTML =
        "🌟 آفرین! این کلمه با د شروع می‌شود";


    }

    else{


        card.classList.add("wrong");


        document.getElementById("message").innerHTML =
        "😊 دوباره فکر کن";


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
