const db = require("./../database/connection");


 const getExpense = async () =>{
    const data = await db.query("Select * from expenses");
    return data;
}
 const getEarning = async () =>{
    const data = await db.query("Select * from earning");
    return data; 
}
const getEarningSum = async () =>{
    const data = await db.query("Select sum(amount)  from earning");
    return data; 
}
const getExpensesSum = async () =>{
    const data = await db.query("Select sum(amount) from expenses");
    return data; 
} 
const addExpense = async (body) =>{
    const data = await db.query("INSERT INTO expenses(amount, title) values ($1,$2)", [body.amount, body.title]);
    return data; 
}
 const addEarning = async (body) =>{
    const data = await db.query("INSERT INTO earning(amount, title) values ($1,$2)", [body.amount, body.title]);
    return data; 
}
 const editExpense = async (body) =>{
    const data = await db.query("Update expenses set amount = $1,title=$2 where id =  $3", [body.amount, body.title,body.id]);
    return data; 
}
 const editEarning = async (body) =>{
    const data = await db.query("Update earning set amount = $1,title=$2 where id =  $3", [body.amount, body.title,body.id]);
    return data;
}
 const deleteExpense = async (id) =>{
    const data = await db.query("delete from expenses where id =  $1", [id]);
    return data;
}
 const deleteEarning = async (id) =>{
    const data = await db.query("delete from earning where id =  $1", [id]);
    return data;
}

module.exports = {
    getExpense,
    getEarning,
    addEarning,
    addExpense,
    editEarning,
    editExpense,
    deleteEarning,
    deleteExpense,
    getEarningSum,
    getExpensesSum
}