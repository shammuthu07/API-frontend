// import { useState } from "react";
// import axios from "axios";

// export default function Login({ setToken }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = async () => {
//     if (!email || !password) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:12345/api/login", //  CHANGED
//         { email, password }
//       );

//       if (res.data.token) {
//         localStorage.setItem("token", res.data.token);
//         localStorage.setItem("role", res.data.user.role);

//         setToken(res.data.token);
//       } else {
//         alert("Invalid response from server");
//       }

//     } catch (err) {
//       console.log(err);
//       alert(
//         err.response?.data?.message ||
//         "Server not running or wrong URL"
//       );
//     }
//   };

//   return (
//     <div className="auth-card">
//       <h2>Login</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={submit}>Login</button>
//     </div>
//   );
// }
