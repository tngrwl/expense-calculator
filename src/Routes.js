import React from "react";
import  {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";
import Expense from "./Pages/Expense";

 const Router = () =>{

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/earning" element={<Expense type= "Earning"/>}></Route>
                    <Route path="/expense" element={<Expense type = "Expense"/>}></Route>
                </Routes>
            </BrowserRouter>        
        </>
    )
}

export default Router;