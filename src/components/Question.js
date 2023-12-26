import { useState } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router";
import ErrorMsg from "./ErrorMsg/ErrorMsg";

const Question = ({quesno, setQuesno, questions, score, setScore, setQuestions}) => {

    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    // console.log(questions);

    const handleSelect=(i,correct)=>{
        if(correct === selected && selected === i+1){
            return "select";
        } else if(selected === i+1 && correct !== selected){
            return "wrong";
        } else if(i+1 === correct){
            return "select";
        }
    };

    const handleCheck=(i,correct)=>{
        setSelected(i+1);
        if(i+1===correct) setScore(score+1);
        setError(false);
    }
    const history = useNavigate();

    const handleNext = ()=>{
        if(quesno > 8 && selected){
            history("/result");
        } else if(selected){
            setQuesno(quesno+1);
            setSelected();
        } else{
            setError("An option needs to be selected first");
        }
    };

    const handleQuit = ()=>{
        history("/result");
    }

  return (
    <div>
        <div className="quesblock">
            <span className="stmt"> {quesno + 1}. {questions[quesno].question} </span>
            <div className="options">
            {error && <ErrorMsg>{error}</ErrorMsg>}
                {questions[quesno].options.map((option,i)=>
                <button
                onClick={()=>handleCheck(i,questions[quesno].answer)}
                className={`singleOption ${selected && handleSelect(i, questions[quesno].answer)}`}
                key={i}
                disabled={selected}
                >
                    {option}
                </button>)}
            </div>
        </div>
        <div className="controls">
            <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{width: 185, marginRight: 10}}
                // href="/"
                onClick={handleQuit}
            >
                QUIT
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="large"
                style={{width: 185,  marginLeft: 10}}
                onClick={handleNext}
            >
                {quesno===9 ? "SUBMIT" : "NEXT"}
            </Button>
        </div>
    </div>
  )
}

export default Question;