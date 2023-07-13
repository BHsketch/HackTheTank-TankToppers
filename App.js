import "./App.css";
import Graph from "./Graph";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./Loader.css";
import Intermediate from "./Intermediate";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>User Journey Graph</h1>
              </>
            }
          />
          <Route path="/:scholarshipId" element={<Intermediate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route
//             path="/:scholarshipId"
//             element={
//               initialState.userCount !== 0 && <Graph data={initialState} />
//             }
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// }
// const [initialStateCount, setInitialStateCount] = useState({
//   userCount: 0,
//   loginCount: 0,
//   failedLoginCount: 0,
//   contactCount: 0,
//   aboutCount: 0,
//   scholarshipListingCount: 0,
//   homeCount: 0,
//   scholarshipCount: 0,
//   bookmarkCount: 0,
//   applyCount: 0,
//   termsCount: 0,
//   ineligibleCount: 0,
//   incompleteCount: 0,
//   submittedCount: 0,
//   failedCount: 0,
//   successCount: 0,
//   submittedUsers: [],
// });

// // const [submittedUsers, setSubmittedUsers] = useState();

// useEffect(() => {
//   const fetchUsersCount = async (s1) => {
//     try {
//       const p1 = await axios.get("http://localhost:8800/users");
//       const response1 = p1.data[0].user_count;
//       const p = await axios.get("http://localhost:8800/pages");
//       const response = p.data;
//       const count = await axios.get(
//         `http://localhost:8800/scholarshipCount/s1`
//       );
//       const ans = count.data.scholarshipCount;
//       // console.log(ans);
//       const bookmark = await axios.get("http://localhost:8800/s1/bookmark");
//       const applied = await axios.get("http://localhost:8800/s1/applied");
//       const terms = await axios.get("http://localhost:8800/s1/terms");
//       const ineligible = await axios.get(
//         "http://localhost:8800/s1/ineligible"
//       );
//       const incomplete = await axios.get(
//         "http://localhost:8800/s1/incomplete"
//       );
//       const submitted = await axios.get("http://localhost:8800/s1/submitted");
//       const failed = await axios.get("http://localhost:8800/s1/failed");
//       const success = await axios.get("http://localhost:8800/s1/success");
//       // console.log(submitted.data.users);
//       // console.log(terms.data.userCount);
//       setInitialStateCount({
//         ...initialStateCount,
//         userCount: response1,
//         loginCount: response.p1,
//         homeCount: response.p2,
//         failedLoginCount: response.p1 - response.p2,
//         contactCount: response.p3,
//         scholarshipListingCount: response.p4,
//         aboutCount: response.p5,
//         scholarshipCount: ans,
//         // bookmarkCount: bookmark.data.userCount,
//         applyCount: applied.data.userCount,
//         termsCount: terms.data.userCount,
//         ineligibleCount: ineligible.data.userCount,
//         incompleteCount: incomplete.data.userCount,
//         submittedCount: submitted.data.userCount,
//         failedCount: failed.data.userCount,
//         successCount: success.data.userCount,
//         submittedUsers: submitted.data.users,
//       });
//       // setSubmittedUsers(submitted.data.users);
//       // console.log(initialState);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetchUsersCount();
// }, []);