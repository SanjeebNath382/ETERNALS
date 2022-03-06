import profile from "../images/MediCure-logos_.jpeg";
import email from "../images/email.jpg";
import pass from "../images/pass.png";
// import {useRouter} from "next/router";
// import Link from "next/link";
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import '../components/login.css';

import React from 'react'

export default function login() {
  const [user, setuser] = useState("");
const handChange = (event) =>{
  setuser(event.target.value);
  console.log(user);
}
const handSubmit = () =>{
  const navigate = useNavigate();
  if(user=="admin") navigate("/doctorDashboard");
  else              navigate("/dashboard");
}
  return (
    
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" style={{marginTop:'-11px', marginLeft:'-5px'}} />
              <input type="text" placeholder="user name" className="name" onChange={handChange}/>
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" style={{marginTop:'-11px', marginLeft:'-5px'}} />
              <input type="password" placeholder="password" className="name" />
            </div>
            <div className="login-button">
              {/* <Link href="/dashboard"> */}
              <Link to="/dashboard"><button>Login as user</button></Link>
              {/* </Link> */}
            </div>
            <div className="login-button">
              {/* <Link href="/dashboard"> */}
              <Link to="/doctorDashboard"><button>Login as doctor</button></Link>
              {/* </Link> */}
            </div>

            <p className="link">
              <a href="#">Forgot password ?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


// const Login=() => {
// //   const router = useRouter();
// const [user, setuser] = useState("");
// const handChange = (e) =>{
//   setuser(e.traget.value);
//   console.log(user);
// }
// const handSubmit = () =>{
//   const navigate = useNavigate();
//   if(user=="admin") navigate("/doctorDashboard");
//   else              navigate("/dashboard");
// }
//   return (
    
//     <div className="main">
//       <div className="sub-main">
//         <div>
//           <div className="imgs">
//             <div className="container-image">
//               <img src={profile} alt="profile" className="profile" />
//             </div>
//           </div>
//           <div>
//             <h1>Login Page</h1>
//             <div>
//               <img src={email} alt="email" className="email" style={{marginTop:'-11px', marginLeft:'-5px'}} onChange={handChange}/>
//               <input type="text" placeholder="user name" className="name" />
//             </div>
//             <div className="second-input">
//               <img src={pass} alt="pass" className="email" style={{marginTop:'-11px', marginLeft:'-5px'}} />
//               <input type="password" placeholder="password" className="name" />
//             </div>
//             <div className="login-button">
//               {/* <Link href="/dashboard"> */}
//               <button onClick={handSubmit}>Login</button>
//               {/* </Link> */}
//             </div>

//             <p className="link">
//               <a href="#">Forgot password ?</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;