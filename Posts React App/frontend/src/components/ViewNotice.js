// import React, { useEffect, useState } from "react";
// import { fetchNotices, deleteNotice } from "../api/notices";

// const ViewNotice = () => {
//   const [notices, setNotices] = useState([]);

//   useEffect(() => {
//     const fetchNoticesData = async () => {
//       try {
//         const fetchedNotices = await fetchNotices();
//         setNotices(fetchedNotices);
//       } catch (error) {
//         console.error("Error fetching notices:", error);
//       }
//     };
//     fetchNoticesData();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteNotice(id);
//       setNotices((prevNotices) =>
//         prevNotices.filter((notice) => notice._id !== id)
//       );
//     } catch (error) {
//       console.error("Error deleting notice:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div>
//         <h2>View Notices</h2>
//         {notices.map((notice) => (
//           <div className="notice-card" key={notice._id}>
//             <h3>{notice.title}</h3>
//             <p>{notice.description}</p>
//             <p>Author: {notice.authorName}</p>
//             <p>Date: {new Date(notice.date).toLocaleDateString()}</p>
//             <div>
//               <button>Edit</button>
//               <button onClick={() => handleDelete(notice._id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ViewNotice;

import React, { useEffect, useState } from "react";
import { fetchNotices, deleteNotice } from "../api/notices";

const ViewNotice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNoticesData = async () => {
      try {
        const fetchedNotices = await fetchNotices();
        setNotices(fetchedNotices);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };
    fetchNoticesData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteNotice(id);
      setNotices((prevNotices) =>
        prevNotices.filter((notice) => notice._id !== id)
      );
    } catch (error) {
      console.error("Error deleting notice:", error);
    }
  };

  return (
    <div className="container">
      <div>
        <h2>View Notices</h2>
        {notices.map((notice) => (
          <div className="notice-card" key={notice._id}>
            <h3>{notice.title}</h3>
            <p>{notice.description}</p>
            <p>Author: {notice.authorName}</p>
            <p>Date: {new Date(notice.date).toLocaleDateString()}</p>
            <div>
              <button>Edit</button>
              <button onClick={() => handleDelete(notice._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewNotice;

