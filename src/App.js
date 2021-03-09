import { useState } from "react";
import "./styles.css";

export default function App() {
   const[contact,setContact]=useState({
     fName:"",
     lName:"",
     email:""
   });
   

   function handleChangeEvent(event){
     
     const{value,name}=event.target;
     
     setContact((prevValue)=>{
       if(name==="fName"){
          return{
           fName:value,
           lName:prevValue.lName,
           email:prevValue.email
          }
       }else if(name==="lName"){
          return{
           fName:prevValue.fName,
           lName:value,
           email:prevValue.email
           }
       }else if(name==="email"){
           return{
           fName:prevValue.fName,
           lName:prevValue.lName,
           email:value
           }
       }
     })

   }
  return (
    <div className="App">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form>
      <input type="text"
       name="fName"
       onChange={handleChangeEvent}
       placeholder="FirstName"
      // value={fullName.fName}
       />
       <input type="text"
       name="lName"
       onChange={handleChangeEvent}
       placeholder="LastName"
       //value={fullName.lName}
       />
       <input 
       type="text"
       name="email"
       onChange={handleChangeEvent}
       placeholder="Email"/>
       <button>submit</button>
      </form>
      
    
    </div>
  );
}
