const quizQuestions = [
    {
        question: "Which city is the capital of France?",
        options: ["Paris", "Lyon", "Marseille", "Nice"],
        answer: "Paris"
    },
    {
        question: "What is the capital city of Germany?",
        options: ["Munich", "Frankfurt", "Berlin", "Hamburg"],
        answer: "Berlin"
    },
    {
        question: "India's capital is which of the following?",
        options: ["Mumbai", "New Delhi", "Bengaluru", "Hyderabad"],
        answer: "New Delhi"
    },
    {
        question: "Tokyo is the capital of which country?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan"
    },
    {
        question: "Seoul is the capital of which nation?",
        options: ["Japan", "China", "South Korea", "Vietnam"],
        answer: "South Korea"
    },
    {
        question: "Bangkok serves as the capital of which country?",
        options: ["Thailand", "Malaysia", "Indonesia", "Philippines"],
        answer: "Thailand"
    },
    {
        question: "Jakarta is the capital of which country?",
        options: ["Malaysia", "Indonesia", "Singapore", "Brunei"],
        answer: "Indonesia"
    },
    {
        question: "Kuala Lumpur is the capital of which country?",
        options: ["Indonesia", "Thailand", "Malaysia", "Vietnam"],
        answer: "Malaysia"
    },
    {
        question: "Which city-state is also a country's capital?",
        options: ["Singapore", "Bangkok", "Manila", "Jakarta"],
        answer: "Singapore"
    }
];
const scoreContainer=document.getElementById("scoreContainer");
const quizContainer=document.getElementById("quiz-container");
const questionElement=document.getElementById("question");
const optionsElement=document.getElementById("options");
const submitButton=document.getElementById("submitButton");
const resultContainer=document.getElementById("resultContainer");
let score=0;
let currentQuestionIndex=0;
function displayQuestion(){
    if(currentQuestionIndex<quizQuestions.length){
        const currentQuestion=quizQuestions[currentQuestionIndex];
        questionElement.textContent=currentQuestion.question;
        optionsElement.innerHTML="";
        currentQuestion.options.forEach(option=>{
            const radio=document.createElement("input");
            radio.type="radio";
            radio.name="option";
            radio.value=option;

            const label=document.createElement("label");
            label.textContent=option;
            const div=document.createElement("div");
            div.appendChild(radio);
            div.appendChild(label);
            optionsElement.appendChild(div);
            
        });
    }
    else{
        resultContainer.textContent="Quiz completed!";
        optionsElement.innerHTML="";
        optionsElement.style.display="none";
        resultContainer.style.display="block";
        resultContainer.textContent="Your final score is "+score;
        submitButton.style.display="none";
    }
}
displayQuestion();
submitButton.addEventListener("click",function(){
    const selectedOption=document.createElement("input[name='option']:checked");
    if(!selectedOption){
        resultContainer.textContent="Please select an option!";
        return;
    }
        const answer=quizQuestions[currentQuestionIndex].answer;
        if(selectedOption.value===answer){
            resultContainer.style.color="green";
        resultContainer.textContent="Correct!";
        score++;
        
    }
    else{
        resultContainer.style.color="red";
        resultContainer.textContent="Incorrect! Correct answer is "+answer;
     
    }
    scoreContainer.textContent="Your scored :"+score;
    setTimeout(()=>{
        currentQuestionIndex++;
        if(currentQuestionIndex<quizQuestions.length){
            displayQuestion();
            resultContainer.textContent="";
        }
        else{
           displayQuestion();
        }
    },1500);
    

}
)