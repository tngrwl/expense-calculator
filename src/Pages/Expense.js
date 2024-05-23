import { Button, Input, Modal, Table } from "antd";
import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";

const Expense = (props) =>{
    // const MyContext = useContext();
    console.log("my Context here", props);
    const [isOpen, setIdOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [data, setdata] = useState([]);
    const [total, setTotal] = useState(0);
    const [id, setId] = useState(0);
    const [isEdit, setIsEdit] = useState(false);
    const [amount, setAmount] = useState(0);
    const [title, setTitle] = useState('');
    const type = props.type;
    const addrecord = () =>{
        setIdOpen(true);
    }

    useEffect(()=>{
        getRecords();
    },[props])
    const getRecords = () =>{
        let url = ''
        if(type == 'Expense'){
            url = "http://localhost:3001/api/get-expense"
        }else{
            url = "http://localhost:3001/api/get-earning"
        }
        axios.get(url).then(res=>{
            console.log("res-", res)
            setdata(res.data);
            calculateTotal();
        }).catch(error=>{
            console.log("error at add record", error);
        })
    }
    const calculateTotal = () =>{
        let sum = 0
        data.map(x=> sum = sum + x.amount);
        setTotal(sum);
    }
    const submit = () =>{
        console.log("amount ", amount);
        console.log("title: ", title);
        if(isEdit){
            let url = ''
            if(type == 'Expense'){
                url = "http://localhost:3001/api/edit-expense"
            }else{
                url = "http://localhost:3001/api/edit-earning"
            }
            const body = {
                id:id,
                amount:amount,
                title:title
            }
            axios.post(url,body).then(res=>{
                getRecords();
                setIdOpen(false);
                setAmount(0);
                setTitle('');
                setIsEdit(false);
                setId(null);
            }).catch(error=>{
                setIsEdit(false);
                console.log("error at add record", error);
            })
        }else{
            let url = ''
            if(type == 'Expense'){
                url = "http://localhost:3001/api/add-expense"
            }else{
                url = "http://localhost:3001/api/add-earning"
            }
            const body = {
                amount:amount,
                title:title
            }
            console.log(body);
            axios.post(url,body).then(res=>{
                getRecords();
                setIdOpen(false);
                setAmount(0);
                setTitle('');
            }).catch(error=>{
                console.log("error at add record", error);
            })
        }
       
       
    }
    const EditBtnClicked = (record) =>{
        setId(record.id);
        setIsEdit(true);
        setIdOpen(true);
        setAmount(record.amount);
        setTitle(record.title);
    }
    const deleteBtnClicked = (record) =>{
        setId(record.id);
        setIsDeleteOpen(true)
    }
    const deleteRecord = () => {
        let url = ''
        if(type == 'Expense'){
            url = "http://localhost:3001/api/delete-expense/"
        }else{
            url = "http://localhost:3001/api/delete-earning/"
        }
        axios.get(url+id).then(res=>{
            getRecords();
            setIsDeleteOpen(false);
        }).catch(error=>{
            console.log("error at add record", error);
        })
       
    }
    const columns = [{key:"title", dataIndex: "title",title:"Title"}, 
    {key:"amount", dataIndex: "amount",title:"Amount"},
    {key:"action", dataIndex: "action",title:"action",  
     render: (_, record) => <><Button onClick={() =>EditBtnClicked(record)}>Edit</Button><Button onClick={() => deleteBtnClicked(record)}>Delete</Button></>}];
    return (<>
    <Header/>
    {/* <Link to={'/'}>Home</Link>
    <Link to={'/earning'}>Earning</Link>
    <Link to={'/expense'}>Expense</Link> */}
    <Modal open={isOpen} onOk={submit} onCancel={() => setIdOpen(false)} okText="Submit">
        <div><span>Add Amount: </span> <Input type="number"  value={amount} onChange={e=>setAmount(e.target.value)}></Input></div>
        <div><span>Enter Title: </span> <Input value={title} onChange={e=>setTitle(e.target.value)}></Input></div>
        {/* <div> <Button onClick={submit}>Submit</Button></div> */}
    </Modal>
    <Modal open={isDeleteOpen} onOk={deleteRecord} onCancel={() => setIsDeleteOpen(false)} okText="Yes">
        <div><span>Are you sure you want to delete the record?  </span></div>
        {/* <div> <Button onClick={submit}>Submit</Button></div> */}
    </Modal>
    <div><h3>Manage {type} here </h3></div>
    <div><Button onClick={addrecord}>Add {type}</Button></div>
    <Table columns={columns} dataSource={data}/>
    <h2>Total {type}: {total}</h2>

    </>)
}

export default Expense;