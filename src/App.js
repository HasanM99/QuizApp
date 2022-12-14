import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {

  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    console.log(name);
    const { data } = await axios.get(
      
      `https://opentdb.com/api.php?amount=10`
    );

     console.log(data);
  };


  
  


  return <BrowserRouter>
    <div className='app' style={{ backgroundImage: 'url("background1.png")' }}><Header/>
    <Routes>
      <Route path="/home" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}  />}></Route>
      <Route path="/quiz" element={<Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions}/>}></Route>
      <Route path="/result" element={<Result name={name} score={score}/>}></Route>
    </Routes>
  </div>
  <Footer/>
    
  </BrowserRouter>
}

export default App;
