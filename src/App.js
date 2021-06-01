import start from "./images/start.svg"
import './App.css';

export default function App() {
  return (
    <div className="App">

<header className="App-header"> 
      <img src={start} alt="Reading woman drawing"/>
</header>

<main>

</main>

<footer>
        <p className="m-0">
        This is an <a href="https://github.com/cslylla/react-dictionary" target="_blank" rel="noreferrer" title="Open GitHub repository">open-sourced</a> project coded by <a href="https://www.linkedin.com/in/lilla-csanaky-a850a617/" target="_blank" rel="noreferrer" title="Open Lilla`s LinkedIn profile" >cslylla</a> 
        </p>
</footer>
    </div>
  );
}
