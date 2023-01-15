import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Form from './components/form';
import Searchbar from './components/searchBar';
import { useEffect,useState } from "react";

function App() {
  const [transactions,setTransactions] = useState(null)
  
  useEffect(() =>{
  fetch("http://localhost:8000/transactions")
  .then((response)=> response.json())
  .then((res)=>{ 
    setTransactions(res)
  })
  },[])

  let handleSearch = (value) => {
    
    let income = transactions.filter((trans )=> {return trans.description.toLowerCase().includes(value.toLowerCase())})
    if(income.length > 0){
    console.log(income)
    setTransactions(income)}
    else{console.log("No transactions")}
  }
  
  let handleBack = () =>{
    let transactionsNew =  transactions.filter((transaction) => {return transaction.id > 0})
    console.log(transactionsNew)
    setTransactions(transactionsNew)
  }


  return (
    <div className="App">
      <Searchbar handleBack = {handleBack} handleSearch = {handleSearch}/>
      {transactions && <Table data = {transactions}/>}
      <Form/>
    </div>
  );
}

export default App;
