// const UserTable = ({ users, onEdit, onDelete }) => (
//   <table className="table">
//     <thead>
//       <tr>
//         <th>Name</th><th>Email</th><th>Phone</th><th>Action</th>
//       </tr>
//     </thead>
//     <tbody>
//       {users.map(u => (
//         <tr key={u._id}>
//           <td>{u.name}</td>
//           <td>{u.email}</td>
//           <td>{u.phone}</td>
//           <td>
//             <button onClick={() => onEdit(u)}>Edit</button>
//             <button onClick={() => onDelete(u._id)}>Delete</button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );

// export default UserTable;
