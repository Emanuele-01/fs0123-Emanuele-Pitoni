import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';
import MyNav from './components/MyNav';
import MyCarosel from './components/MyCarosel';
import MyCaroselSecond from './components/MyCaroselSecond';
import MyCaroselThird from './components/MyCaroselThird';

function App() {
  return (
    <BrowserRouter>
    <MyNav/>
    <Routes>
      <Route path='/caroselli' element={<MyMain/>}/>
      <Route path='/carosello1' element={<MyCarosel/>}/>
      <Route path='/carosello2' element={<MyCaroselSecond/>}/>
      <Route path='/carosello3' element={<MyCaroselThird/>}/>
    </Routes>
    <MyFooter/>
    </BrowserRouter>
  );
}

export default App;
