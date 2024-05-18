import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './../style/home.css';
import { Header } from "./Header";

const Home =() =>{


    const [balance, setBalance] = useState(0);
    useEffect(() =>{
      getBalance();
    },[])
    const getBalance = () =>{
      axios.get('http://localhost:3001/api/get-balance').then(res=>{
         console.log(res);
         setBalance(res.data.balance)
      })
    }
 return <>
  {/* <div className="links-tab">
   <Link to={'/expense'}>Expenses</Link>
   <Link to={'/earning'}>Earnings</Link>
 </div> */}
<Header/>
 <h3> Hello User, 
    Track your expense here!   
 </h3>

   
   <p> Your Current balance is {balance} </p>


 </>
}

export default Home