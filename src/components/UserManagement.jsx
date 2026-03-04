import axios from "axios";
import { useEffect, useState } from "react";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [editing, setEditing] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await axios.get("http://localhost:12345/api/users");
      setUsers(res.data);
    } catch (err) {
      console.log("Load Error:", err);
    }
  };

  const handleAdd = async () => {
    if (!data.name || !data.email || !data.password) {
      alert("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:12345/api/users", data);
      alert("User Added Successfully");
      loadUsers();
      setData({ name: "", email: "", password: "", role: "user" });
    } catch (err) {
      alert(err.response?.data?.message || "Add Failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:12345/api/users/${id}`);
      loadUsers();
    } catch (err) {
      console.log("Delete Error:", err);
    }
  };

  const handleUpdate = async () => {
    if (!editing.name || !editing.email) {
      alert("Name & Email required");
      return;
    }

    try {
      await axios.put(
        `http://localhost:12345/api/users/${editing._id}`,
        {
          name: editing.name,
          email: editing.email,
          role: editing.role,
        }
      );

      alert("User Updated Successfully");
      setEditing(null);
      loadUsers();
    } catch (err) {
      alert(err.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div className="box">
      <h3>User Management</h3>

      {/* ADD USER */}
      <div className="form-row">
        <input
          placeholder="Name"
          value={data.name}
          onChange={(e) =>
            setData({ ...data, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          value={data.email}
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <select
          value={data.role}
          onChange={(e) =>
            setData({ ...data, role: e.target.value })
          }
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>

        <button onClick={handleAdd}>Add User</button>
      </div>

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button onClick={() => setEditing({ ...u })}>
                  Edit
                </button>

                <button onClick={() => handleDelete(u._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* SLIDE PANEL */}
      <div className={`edit-panel ${editing ? "open" : ""}`}>
        {editing && (
          <>
            <h3>Update User</h3>

            <input
              value={editing.name}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  name: e.target.value,
                })
              }
            />

            <input
              value={editing.email}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  email: e.target.value,
                })
              }
            />

            <select
              value={editing.role}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  role: e.target.value,
                })
              }
            >
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>

            <button onClick={handleUpdate}>
              Update
            </button>

            <button
              className="cancel-btn"
              onClick={() => setEditing(null)}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}
