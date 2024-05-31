import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from "./components/header";
import ListarTarefa from "./pages/Login/ListarTarefa.jsx";
import Barratoll from "./pages/Login/barratoll.jsx"
import Login from "./pages/Login/index.jsx"


function App() {
  return (
    <div className="App">
        <Header />
        <Barratoll/>
        <Login />
        <ListarTarefa/>
       
        <Router>
            <Routes>
                
                <Route path="/ListarTarefa" eLement={<ListarTarefa/>}/>
                
            </Routes>
        </Router>    
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;

/*

      
      
*/      