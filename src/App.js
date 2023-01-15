import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Form from './components/form';
import Searchbar from './components/searchBar';
import { useEffect,useState } from "react";

function App() {
  const [transactions,setTransactions] = useState(null)
  const [initialState,setInitialState] = useState(null)
  
  useEffect(() =>{
  fetch("http://localhost:8000/transactions")
  .then((response)=> response.json())
  .then((res)=>{ 
    setTransactions(res)
    setInitialState(res)
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
    setTransactions(initialState)
  }

  let [name, setName] = useState(false)
  let [newName, setNewName] = useState(true)
  let appendTransaction = ()=>{
    setName(true)
    setNewName(false)
    console.log('true')
  }
  let removeTransaction = ()=>{
    setNewName(true)
    setName(false)
    console.log('true')
  }
 
  let newClassName = newName ? "formVisibible" : "formHidden"
  let className = name ? "formVisible" : "formHidden"
  console.log(className)
  return (
    <div className="App">
      <div className = {newClassName} id='mainContent'>
      <Searchbar appendTransaction = {appendTransaction} handleBack = {handleBack} handleSearch = {handleSearch}/>
      {transactions && <Table data = {transactions}/>}
      </div>
      <Form removeTransaction = {removeTransaction} className = {className} />
    </div>
  );
}

export default App;
