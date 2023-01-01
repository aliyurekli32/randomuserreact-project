import axios from "axios";
import {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Email from "../assets/email.svg";
import Location from "../assets/location.svg";
import Phone from "../assets/phone.svg";
import "./Home.css";

const Home =()=>{
    const [data,setData]=useState([]);
   
    const getData =async ()=>{
        let newData= await axios("https://randomuser.me/api/");
        setData(newData.data.results);   
    }

    useEffect(() => {
      
     getData()
      
    }, []);

    const handleChange=()=>{
        getData();
    }
    
    if(data.length===0){
        return (
            <>
            hicbirşey yok
            </>
        )
    }else{
        const {registered:{date},gender}=data[0];
        const newDate=date.slice(0,10);
       
        return (
            <>
                <Card className={`d-flex flex-column mx-auto w-75 ${gender==="female" ? "box" : "box1"}`}>
                <div className="d-flex justify-content-evenly align-items-center" ><div className="text-center w-50" ><img className="rounded-circle mt-2"  src={data[0]?.picture.large} style={{width:"100px", height:"100px"}}  alt="picture" /></div><div className="w-50 text-center"><p className="align-item-center" >{data[0]?.name.title} {data[0]?.name.first} {data[0]?.name.last}</p></div></div>   
                <div className="d-flex justify-content-evenly align-items-center " ><div className="text-center w-50"  ><img   src={Email} style={{width:"30px", height:"30px"}}   alt="email" /> </div> <div className="w-50 text-center"><p>{data[0]?.email}</p></div></div>
                <div className="d-flex justify-content-evenly align-items-center " ><div className="text-center w-50"  ><img  src={Phone} style={{width:"30px", height:"30px"}}   alt="email" /> </div> <div className="w-50 text-center"><p>{data[0]?.phone}</p></div></div>
                <div className="d-flex justify-content-evenly align-items-center " ><div className="text-center w-50"  ><img  src={Location} style={{width:"30px", height:"30px"}}   alt="email" /> </div> <div className="w-50 text-center"><p>{data[0]?.location.city}-{data[0]?.location.country}</p></div></div>
                <div className="text-center"><p>Age: {data[0]?.dob.age}</p></div>
                <div className="text-center"><p>Register Date: {newDate}</p></div>
                </Card>
                <div className="w-100  text-center"><Button onClick={()=>{handleChange()}} className="w-25 text-center mt-4">Random User</Button></div>
                
            </>
        );
        

    }
 
};

export default Home;