const express = require("express");
const Routes = express();
const service = require('./../service/service');

Routes.get('/get-expense', async (req, res)=>{
    const data = await service.getExpense();
    res.send(data);
})
Routes.get('/get-earning', async (req, res)=>{
    const data = await service.getEarning();
    res.send(data);
})
Routes.post('/add-expense',async (req, res)=>{
    console.log('callede   ', req.body);
    const data = await service.addExpense(req.body);
    res.send(data);
})

Routes.post('/add-earning',async (req,res)=>{
    console.log('callede   ', req.body);
    const data = await service.addEarning(req.body);
    res.send(data);
})
Routes.post('/edit-expense',async (req,res)=>{
    console.log('callede   ', req.body);
    const data = await service.editExpense(req.body);
    res.send(data);
})
Routes.get('/delete-expense/:id',async (req,res)=>{
    console.log('callede   ', req.params.id);
    const data = await service.deleteExpense(req.params.id);
    res.send(data);
})
Routes.post('/edit-earning',async (req,res)=>{
    console.log('callede   ', req.body);
    const data = await service.editEarning(req.body);
    res.send(data);
})
Routes.get('/delete-earning/:id',async (req,res)=>{
    console.log('callede   ', req.params.id);
    const data = await service.deleteEarning(req.params.id);
    res.send(data);
})
Routes.get('/get-balance', async(req,res)=>{
    const expense = await service.getExpensesSum();
    const earning = await service.getEarningSum();
    console.log("expense -",expense);
    console.log("earning -",earning);
    const balance = expense[0].sum-earning[0].sum;
    res.send({balance: balance});
})

module.exports = Routes;