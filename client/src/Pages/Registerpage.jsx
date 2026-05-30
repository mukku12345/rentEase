import { useState } from "react"

export const RegisterPage=()=>{
    const [firstname, setFirstame]=useState("");
    const [lastname, setLastame]=useState("");
    const [email, setEmail]= useState("")
    const [password, setPassword]=useState("")
    const [confirmpassword, setConfirmpassword]=useState("")
    const handlesubmit=()=>{
    if(firstname===""||lastname===""||email===""||password==="")
    {
        alert("Please enter all fields")
    }
    else if(password!==confirmpassword)
    {
        alert("Password is not matched")
    }
    else if(email==""){

    }
}
   
        return(
    <div className="">
        <h2>Register</h2>
        <form >
            <input type="text" placeholder="Enter your First name" onChange={(e)=>setFirstame(e.target.value)}></input>
            
            <input type="text" placeholder="Enter your Last name" onChange={(e)=>setLastame(e.target.value)}></input>
            
            <input type="email" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}></input>
            
            <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}></input>
            
            <input type="password" placeholder="Confirm Password" onChange={(e)=>setConfirmpassword(e.target.value)}></input>

            <button type="submit">Register</button>
        </form>
    </div>)


}