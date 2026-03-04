// import { useState } from "react";
// import axios from "axios";

// export default function Register() {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleRegister = async () => {
//     if (!data.name || !data.email || !data.password) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:12345/api/register", // 🔥 PORT FIXED
//         data
//       );

//       if (res.data.message) {
//         alert(res.data.message);
//       } else {
//         alert("Registered Successfully!");
//       }

//       // Optional: clear form
//       setData({
//         name: "",
//         email: "",
//         password: ""
//       });

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
//       <h2>Register</h2>

//       <input
//         placeholder="Name"
//         value={data.name}
//         onChange={(e) =>
//           setData({ ...data, name: e.target.value })
//         }
//       />

//       <input
//         type="email"
//         placeholder="Email"
//         value={data.email}
//         onChange={(e) =>
//           setData({ ...data, email: e.target.value })
//         }
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         value={data.password}
//         onChange={(e) =>
//           setData({ ...data, password: e.target.value })
//         }
//       />

//       <button onClick={handleRegister}>
//         Register
//       </button>
//     </div>
//   );
// }
