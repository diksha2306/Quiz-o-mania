import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home';
import Quiz from '../Pages/Quiz';
import Result from '../Pages/Result';
import DSA from "../quiz_data/DSA";
import OS from '../quiz_data/OS';
import DBMS from '../quiz_data/DBMS';
import OOPS from '../quiz_data/OOPS';
import { useState } from "react";

function App(){

    const [name, setName] = useState("");
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);

    const fetchQuestions = (category)=>{
        let data  = [];
        if(category === "DSA"){
            data = DSA;
        } else if(category==="OOPS"){
            data=OOPS;
        }else if(category==="DBMS"){
            data=DBMS;
        }else if(category==="OS"){
            data=OS;
        }
        setQuestions(data);
    };

    return <BrowserRouter>
    <div className='front'>
        <Header />  

        <Routes>
        <Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />} />
        <Route path="/quiz" element={<Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions}/>} />
        <Route path="/result" element={<Result name={name} score={score} />} />
        </Routes>

        <Footer />
    </div>
    
    </BrowserRouter>
}

export default App;