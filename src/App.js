import logo from './logo.svg';
import './App.css';
import Form from './pages/Form';
import React from 'react'
import Display from './pages/Display';
import { BrowserRouter ,Route} from 'react-router-dom';
import { Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Routes>
<Route path="/display" exact element={<Display/>}></Route>

<Route path="/" element={<Form/>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
