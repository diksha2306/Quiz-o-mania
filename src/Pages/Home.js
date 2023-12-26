import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import Categories, {} from "../Data/Categories";
import { useNavigate } from "react-router";
import ErrorMsg, {} from "../components/ErrorMsg/ErrorMsg";

function Home({name, setName, fetchQuestions}){

    const [category, setCategory] = useState("");
    const [error, setError] = useState(false);

    const history = useNavigate();

    const handleSubmit=()=>{
        if(!category || !name){
            setError(true);
            return;
        } else{
            setError(false);
            fetchQuestions(category);
            history("/quiz");
        }
    };

    return <div className="content">
        <div className="start">
            
            {error && <ErrorMsg>Oops! All fields are mandatory!</ErrorMsg>}

            <span style={{fontSize:35}}>Enter Your Name</span>
            <TextField label="Your name here ..." variant="outlined" style={{width:500, marginBottom:25, marginTop:10}}
            onChange={(e) => setName(e.target.value)} />

            <span style={{fontSize:35}}>Select Category</span>
            <TextField select label="Categories ..." variant="outlined" style={{width:500, marginBottom:25, marginTop:10}}
            onChange={(e) => setCategory(e.target.value)} value={category}>
                {Categories.map((cat) => (
                    <MenuItem key={cat.category} value={cat.value}>
                        {cat.category}
                    </MenuItem>
                ))}
            </TextField>

            {/* <span style={{fontSize:35}}>Select Difficulty Level</span>
            <TextField select label="Difficulty ..." variant="outlined" style={{width:500, marginBottom:25, marginTop:10}}
            onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
                <MenuItem key="Easy" value="easy">
                    Easy
                </MenuItem>
                <MenuItem key="Medium" value="medium">
                    Medium
                </MenuItem>
                <MenuItem key="Hard" value="hard">
                    Hard
                </MenuItem>
            </TextField> */}

            <Button variant="contained" color="primary" size="large" style={{width:500}}
            onClick={handleSubmit}
            >
                START
            </Button>
        </div>
    </div>
}
export default Home;