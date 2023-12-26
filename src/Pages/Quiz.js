import { useState } from "react";
import Question from "../components/Question";
// import { CircularProgress } from "@material-ui/core";

function Quiz({name,score,questions,setScore, setQuestions}){

    const [quesno, setQuesno] = useState(0);

    return <div>
        <span className="greet"> Quiz is running, {name}</span>
        <div className="quizInfo">
            <span> Current Score : {score} / 10 </span>
        </div>
        <Question 
        quesno={quesno}
        setQuesno={setQuesno}
        questions={questions}
        score={score}
        setScore={setScore}
        />
    </div>
}
export default Quiz;