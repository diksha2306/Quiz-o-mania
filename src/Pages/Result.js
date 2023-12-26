import { Button } from "@material-ui/core";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function Result({name,score}){
    const history = useNavigate();
    useEffect(()=>{
        if(!name) history("/");
    }, [name,history])


    return <div className="result">
        <span className="finalscore">Final Score : {score} / 10</span>
        <Button
        variant="contained"
        color="inherit"
        size="large"
        style={{alignSelf:"center", marginTop:260, marginLeft:250
    }}
        href="/"
        >
            BACK TO HOME
        </Button>
    </div>
}
export default Result;