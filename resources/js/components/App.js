import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";

const App = () => {

    return (
       <BrowserRouter>
           <div className="App">
               <Header />
               <AppRouter />
           </div>
       </BrowserRouter>
    );
};


export default App;
