const quizDB=[
    {
        question: "Q1. What is the capital of India ?",
        a: "New Delhi",
        b: "Banglore",
        c: "Mumbai",
        d: "Kolkata",
        ans: "ans1"
    },
    {
        question: "Q2. What is the capital of USA ?",
        a: "California",
        b: "New York",
        c: "Washington DC",
        d: "Alaska",
        ans: "ans3"
    },
    {
        question: "Q3. What is the capital of France ?",
        a: "Nice",
        b: "Paris",
        c: "Bordeaux",
        d: "Dijon",
        ans: "ans2"
    },
];
let questionCount=0;
let score=0;
const question=document.querySelector("#question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const button1=document.querySelector(".btn");
const answers=document.querySelectorAll(".ans");
const showScore=document.querySelector(".scoreArea");

function loadQuestion(){
    const Qlist=quizDB[questionCount];
    question.innerHTML=Qlist.question;
    option1.innerHTML=Qlist.a;
    option2.innerHTML=Qlist.b;
    option3.innerHTML=Qlist.c;
    option4.innerHTML=Qlist.d;
    if(questionCount==2){
        button1.innerHTML="Submit";
    }
    else{
        button1.innerHTML="Next";
    }
};
loadQuestion();

function getCheckedAns(){
    let answer;
    answers.forEach(element => {
        if(element.checked){
            answer=element.id;
        }
    });
    return answer;
}

button1.addEventListener("click",()=>{
    let checkedAns=getCheckedAns();
    if(checkedAns==quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    answers.forEach(element => {
        element.checked=false;
        }
    );
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML='<h3>Your Score: ' + score +'/'+quizDB.length+'</h3><button class="btn1" onclick="location.reload()">Play Again</button>';
        showScore.style.display="block";
        button1.style.display="none"
    }
});