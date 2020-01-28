import React from 'react';
import './Css/App.css';
import Header from "../src/Components/Header";
import Content from "../src/Components/Content";
import Nav from "../src/Components/Nav";
import Footer from "./Components/Footer";

const App = () => {
    return (

        <div className="App">
            <Header/>
            <div className="wrapper">
                <Nav/>
                <Content/>
            </div>
        <Footer/>
        </div>
    );
}

export default App;



