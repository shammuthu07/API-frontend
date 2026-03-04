// import axios from "axios";
// import { useState } from "react";

// export default function Auth() {
//   const [reg, setReg] = useState({});
//   const [log, setLog] = useState({});

//   const handleRegister = () => {
//     axios.post("http://localhost:12345/api/register", reg)
//       .then(() => alert("Registered!"))
//       .catch(err => alert(err.response.data.message));
//   };

//   const handleLogin = () => {
//     axios.post("http://localhost:12345/api/login", log)
//       .then(res => alert("Logged in!"))
//       .catch(err => alert(err.response.data.message));
//   };

//   return (
//     <div className="auth-card">
//       <div>
//         <h2>Register</h2>
//         <input placeholder="Name" onChange={e => setReg({ ...reg, name: e.target.value })} />
//         <input placeholder="Email" onChange={e => setReg({ ...reg, email: e.target.value })} />
//         <input placeholder="Password" onChange={e => setReg({ ...reg, password: e.target.value })} />
//         <button onClick={handleRegister}>Register</button>
//       </div>
//       <div>
//         <h2>Login</h2>
//         <input placeholder="Email" onChange={e => setLog({ ...log, email: e.target.value })} />
//         <input placeholder="Password" onChange={e => setLog({ ...log, password: e.target.value })} />
//         <button onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// }






















import { useState } from "react";
import axios from "axios";

export default function Auth({ setToken }) {
  const [isLogin, setIsLogin] = useState(true);

  // Login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register states
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Login submit
  const handleLogin = async () => {
    if (!loginEmail || !loginPassword) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:12345/api/login",
        { email: loginEmail, password: loginPassword }
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.user.role);
        setToken(res.data.token);
      } else {
        alert("Invalid response from server");
      }

    } catch (err) {
      console.log(err);
      alert(
        err.response?.data?.message ||
        "Server not running or wrong URL"
      );
    }
  };

  // Register submit
  const handleRegister = async () => {
    if (!registerData.name || !registerData.email || !registerData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:12345/api/register",
        registerData
      );

      if (res.data.message) {
        alert(res.data.message);
      } else {
        alert("Registered Successfully!");
      }

      // Clear form
      setRegisterData({ name: "", email: "", password: "" });

      // Switch to login after successful registration
      setIsLogin(true);

    } catch (err) {
      console.log(err);
      alert(
        err.response?.data?.message ||
        "Server not running or wrong URL"
      );
    }
  };

  return (
    <div className="center-box">
      <div className="auth-card">
        {isLogin ? (
          <>
            <h2 style={{ textAlign: "center", color: "#0072ff" }}>Login</h2>

            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>

            <p style={{ textAlign: "center", marginTop: "10px", fontSize: "14px" }}>
              Don't have an account?{" "}
              <span
                style={{ color: "#0072ff", cursor: "pointer", fontWeight: "600" }}
                onClick={() => setIsLogin(false)}
              >
                Register
              </span>
            </p>
          </>
        ) : (
          <>
            <h2 style={{ textAlign: "center", color: "#0072ff" }}>Register</h2>

            <input
              placeholder="Name"
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
            />
            <button onClick={handleRegister}>Register</button>

            <p style={{ textAlign: "center", marginTop: "10px", fontSize: "14px" }}>
              Already have an account?{" "}
              <span
                style={{ color: "#0072ff", cursor: "pointer", fontWeight: "600" }}
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
