import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import { useEffect,useState } from "react";

function App() {
  const [transactions,setTransactions] = useState(null)
  useEffect(() =>{
  fetch("http://localhost:8000/transactions")
  .then((response)=> response.json())
  .then((res)=>{ 
    setTransactions(res)
      console.log(res)})
  },[])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
