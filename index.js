const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What is the capital city of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What is the capital city of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "What is the capital city of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: false }
        ]
    }
]
const quesElement=document.getElementById("ques");
const ansElement=document.getElementById("answers");
const nextBtn=document.getElementById("next-btn");

let currentQuesIndex=0;
let score=0;

function startQuiz(){
    currentQuesIndex=0;
    score=0;
    nextBtn.innerHtml="Next";
    
    showQuestion();

}
function showQuestion(){
    resetState();

    let currentQues=questions[currentQuesIndex];
    let questionNo=currentQuesIndex+1;
    
    quesElement.innerHTML=questionNo+". "+currentQues.question;

    currentQues.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        ansElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}
function resetState(){
    nextBtn.style.display="none";
    while(ansElement.firstChild){
        ansElement.removeChild(ansElement.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(ansElement.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextBtn.style.display="block";

}
nextBtn.addEventListener("click",()=>{
    if(currentQuesIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
function handleNextButton(){
    currentQuesIndex++;
    if(currentQuesIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
function showScore(){
    resetState();
    quesElement.innerHTML=`${score} / ${questions.length}`;
    quesElement.classList.add("res");
    quesElement.style.fontSize="2rem";

    if(score<5){
        const image=document.createElement("img");
        image.src="Images/donkey.png";
        image.classList.add("score-image");
        const container = document.getElementById("container");
        container.style.backgroundImage = "url('Images/loos.jpg')";
        quiz.appendChild(image);
        const app=document.getElementById("app");
        app.style.backgroundColor="black";
        quesElement.style.color="white";
    }else{
        
    }

    
    nextBtn.style.display="none";
    
}
startQuiz();

