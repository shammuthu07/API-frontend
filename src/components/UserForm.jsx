// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router";

// const UserForm = () => {
//   const [data, setData] = useState({ name: "", email: "", phone: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setData({ ...data, [e.target.name]: e.target.value });

//   const submit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:12345/new", data);
//     navigate("/view");
//   };

//   return (
//     <form className="form-box" onSubmit={submit}>
//       <h2>Add User</h2>
//       <input name="name" placeholder="Name" onChange={handleChange} />
//       <input name="email" placeholder="Email" onChange={handleChange} />
//       <input name="phone" placeholder="Phone" onChange={handleChange} />
//       <input name="password" placeholder="Password" onChange={handleChange} />
//       <button>Add</button>
//     </form>
//   );
// };

// export default UserForm;
