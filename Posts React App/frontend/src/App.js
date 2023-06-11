// // import "./App.css";
// // import React from "react";
// // import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// // import {  Switch } from "react-router";
// // import PostNotice from "./components/PostNotice";
// // import ViewNotice from "./components/ViewNotice";

// // const App = () => {
// //   return (
// //     <Router>
// //       <div>
// //         <nav>
// //           <ul>
// //             <li>
// //               <Link to="/">Post Notice</Link>
// //             </li>
// //             <li>
// //               <Link to="/notices">View Notices</Link>
// //             </li>
// //           </ul>
// //         </nav>
// //         {/* <Route exact path="/"> */}
// //           <PostNotice />
// //         {/* </Route> */}
// //         {/* <Route path="/notices"> */}
// //           <ViewNotice />
// //         {/* </Route> */}
// //         {/* <Switch>
// //           <Route exact path="/">
// //             <PostNotice />
// //           </Route>
// //           <Route path="/notices">
// //             <ViewNotice />
// //           </Route>
// //         </Switch> */}
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [notices, setNotices] = useState([]);
//   const [authorName, setAuthorName] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     fetchNotices();
//   }, []);

//   const fetchNotices = async () => {
//     try {
//       const response = await axios.get("/api/notices");
//       setNotices(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleCreateNotice = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/api/notices", {
//         authorName,
//         title,
//         description,
//       });
//       setNotices([...notices, response.data]);
//       setAuthorName("");
//       setTitle("");
//       setDescription("");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDeleteNotice = async (id) => {
//     try {
//       await axios.delete(`/api/notices/${id}`);
//       setNotices(notices.filter((notice) => notice._id !== id));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleEditNotice = async (id) => {
//     const updatedTitle = prompt("Enter the updated title:");
//     if (updatedTitle) {
//       try {
//         const response = await axios.put(`/api/notices/${id}`, {
//           authorName,
//           title: updatedTitle,
//           description,
//         });
//         setNotices(
//           notices.map((notice) => (notice._id === id ? response.data : notice))
//         );
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Notices</h1>
//       <form onSubmit={handleCreateNotice}>
//         <input
//           type="text"
//           placeholder="Author Name"
//           value={authorName}
//           onChange={(e) => setAuthorName(e.target.value)}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Notice Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         <textarea
//           placeholder="Notice Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <br />
//         <button type="submit">Post Notice</button>
//       </form>
//       <hr />
//       {notices.map((notice) => (
//         <div key={notice._id}>
//           <h3>{notice.title}</h3>
//           <p>Author: {notice.authorName}</p>
//           <p>{notice.description}</p>
//           <p>Date: {new Date(notice.date).toLocaleDateString()}</p>
//           <button onClick={() => handleEditNotice(notice._id)}>Edit</button>
//           <button onClick={() => handleDeleteNotice(notice._id)}>Delete</button>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };



// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [notices, setNotices] = useState([]);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get('/api/notices');
      setNotices(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const submitNotice = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/notices', { author, title, description });
      clearForm();
      fetchNotices();
    } catch (error) {
      console.error(error);
    }
  };

  const clearForm = () => {
    setAuthor('');
    setTitle('');
    setDescription('');
  };

  const deleteNotice = async (id) => {
    try {
      await axios.delete(`/api/notices/${id}`);
      fetchNotices();
    } catch (error) {
      console.error(error);
    }
  };

  const renderNotices = () => {
    if (notices.length === 0) {
      return <p>No notices found.</p>;
    }

    return notices.map((notice) => (
      <div key={notice._id} className="notice-card">
        <h3>{notice.title}</h3>
        <p>{notice.author}</p>
        <p>{notice.description}</p>
        <p>{new Date(notice.date).toDateString()}</p>
        <div className="button-group">
          <button onClick={() => deleteNotice(notice._id)}>Delete</button>
          <button onClick={() => editNotice(notice)}>Edit</button>
        </div>
      </div>
    ));
  };

  const editNotice = (notice) => {
    // Implement the edit functionality
    // You can use a modal or a separate edit form
    // Set the initial values of the form with the notice data
    // Update the notice on form submission
  };

  return (
    <div className="app">
      <h1>Notices</h1>
      <form onSubmit={submitNotice}>
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Notice Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Notice Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Post Notice</button>
      </form>
      <div className="notice-container">{renderNotices()}</div>
    </div>
  );
}

export default App;


