import React, {useState} from "react";

function Login(){

    // const initialData = {
    //     user_name: "",
    //     email: "",
    //     password: "",
    //   };
    
    //   const [data, setData] = useState(initialData);
    const[data,setData]=useState({
        user_name:"",
        email:"",
        password:""
    });

    const handleform=(e)=>{
        const {id,value}=e.target;
        setData((prevData)=>({
            user_name: prevData.user_name,
             email: prevData.email,
           password: prevData.password,
            [id]: value,
            
        }));
    }

    const submitFunc= async (e)=>{
        e.preventDefault();
        console.log(data);
        console.log(data.email)
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    user_name:data.user_name,
                    email:data.email,
                    password:data.password
                }),
            });
            console.log(response);
    
            const data1 = await response.json();
            console.log(data1);
    
            if (response.ok) {
                console.log("Token:", data1.token); 
            } else {
                console.error("Login failed:", data1.message);
            }
    
        } catch (error) {
            console.error("Error during login:", error);
        }
    
        setData({
            user_name:"",
            email:"",
            password:""

        })

    }


    return(
        <>
        <div id="form-div" onSubmit={submitFunc}>
        <form className="login-form" id="formdata" >
            <h2 >LOGIN</h2>
            <input className="login-info"  id="user_name" type="text" placeholder="username "  value={data.user_name} onChange={handleform}   />
            <input 
            className="login-info" id="email" type="text" placeholder="email"  onChange={handleform}  value={data.email}
          />
            <input 
              className="login-info"  id="password" type="text" placeholder="Password" value={data.password}  onChange={handleform} />
            <button type="submit">  Login </button>
            
          </form>     
    </div>
        </>
    )
}
export default Login