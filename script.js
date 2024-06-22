const questions =[
    {
        question:"Who developed python",
        answers:[
           {text: "James Goslin", correct:false},
           {text:"Bajarne straustrop" , correct:false},
           {text:"Guido Van Rossum" , correct:true},
           {text:"Tim Breners lee" , correct:false}
         ]
    }, 

    {
        question:"Programming mostly used for machine learning",
        answers:[
           {text: "C++", correct:false},
           {text:"Java" , correct:false},
           {text:"Python" , correct:true},
           {text:"Ruby" , correct:false},
         ]
    }, 

    {
        question:"Full form of SSL",
        answers:[
           {text: "Secure Surface Layer", correct:false},
           {text:"Secure Sockets layer" , correct:true},
           {text:"Safe Socket layer" , correct:false},
           {text:"Secure Safety layer" , correct:false},
         ]
    }, 


    {
        question:"ji",
        answers:[
           {text: "James Goslin", correct:false},
           {text:"Bajarne straustrop" , correct:false},
           {text:"Guido Van Rossum" , correct:false},
           {text:"Tim Breners lee" , correct:false},
         ]
    }, 

]


const Questions = document.getElementById("questions");
const AnswerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){      // function to start the quiz
  currentQuestionIndex = 0
  score = 0
  nextButton.innerHTML ="Next";
  showQuestion();
}

//function to show questions number and text.
function showQuestion(){
   resetState()
   let currentQuestion = questions[currentQuestionIndex]
   let questionNumber = currentQuestionIndex + 1;
   Questions.innerHTML = questionNumber +  "." + currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button")
    button.innerHTML = answer.text;
    button.classList.add("btn");
    AnswerButtons.appendChild(button)
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);



   });


}
function resetState(){
    nextButton.style.display = "none";
    while(AnswerButtons.firstChild){
        AnswerButtons.removeChild(AnswerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(AnswerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";


}

function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextBtn()
    }
    else{
        startQuiz()
    }
})

function showScore(){
    resetState();
    Questions.innerHTML = `You scores ${score} out of ${questions.length}`
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

startQuiz();

