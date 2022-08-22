import './App.css';
import axios from "axios";
import { useState } from "react";

function App() {
const [data, setData] = useState();

  const handleOnClick = () => {
    axios.get('http://localhost:5000/api').then( ({data}) => setData(data) );
    console.log(data)
  }

  const handleOnClick2 = () => {
    axios.post('http://localhost:5000/users',{
        email: "Marek",
        nameUser: "Julia",
        name: "Julia",
        age: "10"
    })
  }

  return (
    <div className="App">
     <button onClick={handleOnClick}>KlIK</button>
        <p>{data}</p>
    <button onClick={handleOnClick2}>2KlIK2</button>
        <p>{data}</p>
    </div>
  );
}

export default App;
