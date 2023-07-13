const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "param1903",
  database: "scholify",
});

app.use(cors());

app.get("/", (req, res) => {
  res.json("this is the backend");
});
app.get("/users", (req, res) => {
  const q = `SELECT COUNT(*) AS user_count
  FROM users`;
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      console.log(data[0].user_count);
      return res.json(data);
    }
  });
});

app.get("/pages", (req, res) => {
  const pages = [
    "p1",
    "p2",
    "p3",
    "p4",
    "p5",
    "p6",
    "p7",
    "p8",
    "p9",
    "p10",
    "p11",
    "p12",
    "p13",
    "p14",
  ];

  const pageCounts = {};

  pages.forEach((page) => {
    const q = `SELECT COUNT(*) AS page_count
               FROM user_scholarship_page
               WHERE page_id = '${page}'`;

    db.query(q, (err, data) => {
      if (err) {
        console.error(err);
        pageCounts[page] = 0; // Set count to 0 in case of error
      } else {
        pageCounts[page] = data[0].page_count;
      }

      if (Object.keys(pageCounts).length === pages.length) {
        // All queries have been executed
        console.log(pageCounts);
        return res.json(pageCounts);
      }
    });
  });
});

app.get("/steps", (req, res) => {
  const steps = [0, 1, 2, 3, 4, 5, 6];

  const stepCounts = {};

  steps.forEach((step) => {
    const q = `SELECT COUNT(*) AS step_count
               FROM user_scholarship_page
               WHERE step_number = ${step}`;

    db.query(q, (err, data) => {
      if (err) {
        console.error(err);
        stepCounts[step] = 0; // Set count to 0 in case of error
      } else {
        stepCounts[step] = data[0].step_count;
      }

      if (Object.keys(stepCounts).length === steps.length) {
        // All queries have been executed
        console.log(stepCounts);
        return res.json(stepCounts);
      }
    });
  });
});

// app.get("/pagePercentage/:pageId", (req, res) => {
//   const pageId = req.params.pageId;

//   const q = `SELECT step_number
//              FROM pages
//              WHERE page_id = '${pageId}'`;

//   db.query(q, (err, data) => {
//     if (err) {
//       console.error(err);
//       return res
//         .status(500)
//         .json({ error: "An error occurred while fetching the step number." });
//     }

//     const currentStep = data[0].step_number;
//     const previousStep = currentStep - 1;

//     const q1 = `SELECT COUNT(*) AS previous_count
//                 FROM user_scholarship_page
//                 WHERE step_number = ${previousStep}`;

//     const q2 = `SELECT COUNT(*) AS current_count
//                 FROM user_scholarship_page
//                 WHERE page_id = '${pageId}'`;

//     db.query(q1, (err1, data1) => {
//       if (err1) {
//         console.error(err1);
//         return res
//           .status(500)
//           .json({
//             error: "An error occurred while calculating the previous count.",
//           });
//       }

//       db.query(q2, (err2, data2) => {
//         if (err2) {
//           console.error(err2);
//           return res
//             .status(500)
//             .json({
//               error: "An error occurred while calculating the current count.",
//             });
//         }

//         const previousCount = data1[0].previous_count;
//         const currentCount = data2[0].current_count;

//         const percentage = (currentCount / previousCount) * 100;

//         return res.json({ percentage });
//       });
//     });
//   });
// });

app.get("/scholarshipCount/:scholarshipId", (req, res) => {
  const scholarshipId = req.params.scholarshipId;
  const q = `SELECT COUNT(*) AS scholarship_count
  FROM user_scholarship_page WHERE step_number=3 AND scholarship_id='${scholarshipId}'`;

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "An error occurred while fetching the scholarship count.",
      });
    }

    const scholarshipCount = data[0].scholarship_count;

    return res.json({ scholarshipCount });
  });
});

app.get("/:scholarshipId/bookmark", (req, res) => {
  const scholarshipId = req.params.scholarshipId;

  const q = `SELECT users.*
             FROM users
             JOIN user_scholarship_page ON users.user_id = user_scholarship_page.user_id
             WHERE user_scholarship_page.page_id = 'p7' AND user_scholarship_page.scholarship_id = '${scholarshipId}'`;

  const q2 = `SELECT COUNT(DISTINCT user_id) AS user_count
              FROM user_scholarship_page
              WHERE page_id = 'p7' AND scholarship_id = '${scholarshipId}'`;

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "An error occurred while fetching the user information.",
      });
    }

    db.query(q2, (err2, data2) => {
      if (err2) {
        console.error(err2);
        return res
          .status(500)
          .json({ error: "An error occurred while fetching the user count." });
      }

      const users = data;
      const userCount = data2[0].user_count;

      return res.json({ users, userCount });
    });
  });
});

app.get("/:scholarshipId/applied", (req, res) => {
  const scholarshipId = req.params.scholarshipId;

  const q = `SELECT users.*
             FROM users
             JOIN user_scholarship_page ON users.user_id = user_scholarship_page.user_id
             WHERE user_scholarship_page.page_id = 'p10' AND user_scholarship_page.scholarship_id = '${scholarshipId}'`;

  const q2 = `SELECT COUNT(DISTINCT user_id) AS user_count
              FROM user_scholarship_page
              WHERE page_id = 'p10' AND scholarship_id = '${scholarshipId}'`;

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "An error occurred while fetching the user information.",
      });
    }

    db.query(q2, (err2, data2) => {
      if (err2) {
        console.error(err2);
        return res
          .status(500)
          .json({ error: "An error occurred while fetching the user count." });
      }

      const users = data;
      const userCount = data2[0].user_count;

      return res.json({ users, userCount });
    });
  });
});

app.get("/:scholarshipId/terms", (req, res) => {
  const scholarshipId = req.params.scholarshipId;

  const q = `SELECT users.*
             FROM users
             JOIN user_scholarship_page ON users.user_id = user_scholarship_page.user_id
             WHERE user_scholarship_page.page_id = 'p8' AND user_scholarship_page.scholarship_id = '${scholarshipId}'`;

  const q2 = `SELECT COUNT(DISTINCT user_id) AS user_count
              FROM user_scholarship_page
              WHERE page_id = 'p8' AND scholarship_id = '${scholarshipId}'`;

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "An error occurred while fetching the user information.",
      });
    }

    db.query(q2, (err2, data2) => {
      if (err2) {
        console.error(err2);
        return res
          .status(500)
          .json({ error: "An error occurred while fetching the user count." });
      }

      const users = data;
      const userCount = data2[0].user_count;

      return res.json({ users, userCount });
    });
  });
});

app.get("/:scholarshipId/ineligible", (req, res) => {
  const scholarshipId = req.params.scholarshipId;

  const q = `SELECT users.*
             FROM users
             JOIN user_scholarship_page ON users.user_id = user_scholarship_page.user_id
             WHERE user_scholarship_page.page_id = 'p9' AND user_scholarship_page.scholarship_id = '${scholarshipId}'`;

  const q2 = `SELECT COUNT(DISTINCT user_id) AS user_count
              FROM user_scholarship_page
              WHERE page_id = 'p9' AND scholarship_id = '${scholarshipId}'`;

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "An error occurred while fetching the user information.",
      });
    }

    db.query(q2, (err2, data2) => {
      if (err2) {
        console.error(err2);
        return res
          .status(500)
          .json({ error: "An error occurred while fetching the user count." });
      }

      const users = data;
      const userCount = data2[0].user_count;

      return res.json({ users, userCount });
    });
  });
});

app.get("/:scholarshipId/incomplete", (req, res) => {
  const scholarshipId = req.params.scholarshipId;

  const q = `SELECT users.*
             FROM users
             JOIN user_scholarship_page ON users.user_id = user_scholarship_page.user_id
             WHERE user_scholarship_page.page_id = 'p11' AND user_scholarship_page.scholarship_id = '${scholarshipId}'`;

  const q2 = `SELECT COUNT(DISTINCT user_id) AS user_count
              FROM user_scholarship_page
              WHERE page_id = 'p11' AND scholarship_id = '${scholarshipId}'`;

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "An error occurred while fetching the user information.",
      });
    }

    db.query(q2, (err2, data2) => {
      if (err2) {
        console.error(err2);
        return res
          .status(500)
          .json({ error: "An error occurred while fetching the user count." });
      }

      const users = data;
      const userCount = data2[0].user_count;

      return res.json({ users, userCount });
    });
  });
});

app.get("/:scholarshipId/submitted", (req, res) => {
  const scholarshipId = req.params.scholarshipId;

  const q = `SELECT users.*
             FROM users
             JOIN user_scholarship_page ON users.user_id = user_scholarship_page.user_id
             WHERE user_scholarship_page.page_id = 'p12' AND user_scholarship_page.scholarship_id = '${scholarshipId}'`;

  const q2 = `SELECT COUNT(DISTINCT user_id) AS user_count
              FROM user_scholarship_page
              WHERE page_id = 'p12' AND scholarship_id = '${scholarshipId}'`;

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "An error occurred while fetching the user information.",
      });
    }

    db.query(q2, (err2, data2) => {
      if (err2) {
        console.error(err2);
        return res
          .status(500)
          .json({ error: "An error occurred while fetching the user count." });
      }

      const users = data;
      const userCount = data2[0].user_count;

      return res.json({ users, userCount });
    });
  });
});

app.get("/:scholarshipId/failed", (req, res) => {
  const scholarshipId = req.params.scholarshipId;

  const q = `SELECT users.*
             FROM users
             JOIN user_scholarship_page ON users.user_id = user_scholarship_page.user_id
             WHERE user_scholarship_page.page_id = 'p13' AND user_scholarship_page.scholarship_id = '${scholarshipId}'`;

  const q2 = `SELECT COUNT(DISTINCT user_id) AS user_count
              FROM user_scholarship_page
              WHERE page_id = 'p13' AND scholarship_id = '${scholarshipId}'`;

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "An error occurred while fetching the user information.",
      });
    }

    db.query(q2, (err2, data2) => {
      if (err2) {
        console.error(err2);
        return res
          .status(500)
          .json({ error: "An error occurred while fetching the user count." });
      }

      const users = data;
      const userCount = data2[0].user_count;

      return res.json({ users, userCount });
    });
  });
});

app.get("/:scholarshipId/success", (req, res) => {
  const scholarshipId = req.params.scholarshipId;

  const q = `SELECT users.*
             FROM users
             JOIN user_scholarship_page ON users.user_id = user_scholarship_page.user_id
             WHERE user_scholarship_page.page_id = 'p14' AND user_scholarship_page.scholarship_id = '${scholarshipId}'`;

  const q2 = `SELECT COUNT(DISTINCT user_id) AS user_count
              FROM user_scholarship_page
              WHERE page_id = 'p14' AND scholarship_id = '${scholarshipId}'`;

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "An error occurred while fetching the user information.",
      });
    }

    db.query(q2, (err2, data2) => {
      if (err2) {
        console.error(err2);
        return res
          .status(500)
          .json({ error: "An error occurred while fetching the user count." });
      }

      const users = data;
      const userCount = data2[0].user_count;

      return res.json({ users, userCount });
    });
  });
});

app.listen(8800, () => {
  console.log("connected to backend");
});