import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  return <BrowserRouter>
    <div className='app'><Header/></div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/quiz" element={<Quiz/>}></Route>
      <Route path="/result" element={<Result/>}></Route>
    </Routes>
  </BrowserRouter>
}

export default App;
