const quiz = [
  {
    question: "What is the capital of India?",
    answer: "delhi"
  },
  {
    question: "What is 5 + 7?",
    answer: "12"
  },
  {
    question: "What language is used to style web pages?",
    answer: "css"
  }
];

function startQuiz(){
    
    let Score = 0;   
    
    for (let i = 0; i < quiz.length; i++) {

        const ans = prompt( quiz[i].question )

        if(ans === null){
            alert("Quiz canceled.");
            return;   
        }

        let cleaned = ans.trim().toLowerCase();

        if (cleaned === quiz[i].answer){
            alert("Correct!");
            Score++;
        } else {
            alert("Incorrect! The correct answer is: " + quiz[i].answer);
        }
    }

    // Show the final score (not sure if this is the best way)
    alert("Quiz complete! Your final score is " + Score + " out of " + quiz.length + ".");
}

// Start the quiz
startQuiz();