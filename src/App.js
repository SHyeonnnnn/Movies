
import React from 'react';
import Home from './routes/Home';
import Navigation from './component/Navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './routes/About';
import Detail from './routes/Detail';


const App = () => {
  return (
     <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/detail/:id' element={<Detail/>}></Route>
        </Routes>
     </BrowserRouter>
  );
};

export default App;