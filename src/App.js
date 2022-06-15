import React from "react";
import Navigation from "./components/navigation";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>#todo</h1>
      <Navigation/>
      <footer style={{textAlign:"center"}}>created by <a href="https://devchallenges.io/portfolio/cloudberries27" target="_blank" rel="noreferrer">@cloudberries27</a> - devchallenges.io </footer>
    </div>
  );
}

export default App;
