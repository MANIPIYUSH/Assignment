//import logo from './logo.svg';
//import './App.css';
import Page1 from ".//Componets/Page1"
import Page2 from ".//Componets/Page2"
import Main from ".//Componets/Main"
import {BrowseRouter,Routes,Route, BrowserRouter} from "react-router-dom";


function App() {
  return (
    
    <BrowserRouter>
           <Main/>
          <Routes>
                <Route path="/Page1" element={<Page1/>}/>
                <Route path="/Page2" element={<Page2/>}/>
          </Routes>
   
          </BrowserRouter>
  );
}

export default App;
