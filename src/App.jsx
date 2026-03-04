// import { useState } from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import UserManagement from "./components/UserManagement";
// import Anime from "./components/Anime";
// import AnimeDetails from "./components/AnimeDetails";
// import "./App.css";


// function App() {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [selectedAnime, setSelectedAnime] = useState(null);

//   if (!token) {
//     return (
//       <>
//         <Header />
//         <div className="center-box">
//           <Register setToken={setToken} />

//           <Login setToken={setToken} />

//         </div>
//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <Header />

//       <div className="logout-box">
//         <button
//           className="logout-btn"
//           onClick={() => {
//             localStorage.removeItem("token");
//             setToken(null);
//           }}
//         >
//           Logout
//         </button>
//       </div>

//       <UserManagement />

//       {selectedAnime ? (
//         <AnimeDetails
//           anime={selectedAnime}
//           onBack={() => setSelectedAnime(null)}
//         />
//       ) : (
//         <Anime onSelect={setSelectedAnime} />
//       )}

//       <Footer />
//     </>
//   );
// }

// export default App;


























import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./components/Auth"; // 🔥 single Auth toggle component
import UserManagement from "./components/UserManagement";
import Anime from "./components/Anime";
import AnimeDetails from "./components/AnimeDetails";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [selectedAnime, setSelectedAnime] = useState(null);

  if (!token) {
    return (
      <>
        <Header />

        {/* 🔥 single Auth component */}
        <div className="center-box">
          <Auth setToken={setToken} />
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="logout-box">
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
            setToken(null);
          }}
        >
          Logout
        </button>
      </div>

      <UserManagement />

      {selectedAnime ? (
        <AnimeDetails
          anime={selectedAnime}
          onBack={() => setSelectedAnime(null)}
        />
      ) : (
        <Anime onSelect={setSelectedAnime} />
      )}

      <Footer />
    </>
  );
}

export default App;
