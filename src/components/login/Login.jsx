import "./Login.css";
import userImage from "./user.png"
import { useState } from "react";

function Login() {
  const [user1, setUser1] = useState(""); 
  const [pwd, setPwd] = useState(""); 
  const [currentUser, setCurrentUser] = useState([{}]);
  const [user, setUser] = useState([
    {
        username:"David",
        password:"12345",
    },

    {
        username: "Ade",
        password: "54321",
    }
]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user1 && !pwd) {
        console.log("empty");
    } else{
       user1.push({})
    }
  }

    return (
     <main className="main">
      <div className="login-box">
        <img src={userImage} alt="User-Image" className="avatar" />

            <h1> Login Here </h1>
                <form action="" onSubmit={handleSubmit}>
                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" onChange={e => setUser1(e.target.value)} />

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" onChange={e => setPwd(e.target.value)} />

                    <input type="submit" value="LOGIN" /> <br />
                </form>
            <a href=""> Forgot Password? </a> <br />
            <a href=""> Don't have an account? </a>
      </div>
     </main>
    )
  }
  

export default Login;  

