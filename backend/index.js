const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "scholify",
});

app.use(cors());
app.use(express.json());

//inserting data into the mySQL database:

function incrementUserId(userId) {
  let numericPart = userId.substring(1); // Extract the numerical part of the user ID
  let nextNumericPart = parseInt(numericPart) + 1; // Increment the numerical part by 1
  let nextUserId = "U" + nextNumericPart; // Concatenate the prefix "U" with the incremented numerical part
  return nextUserId;
}

app.post("/signup", (req, res) => {
  const getMaxUserIdQuery = `SELECT user_id
  FROM users
  ORDER BY CAST(SUBSTRING(user_id, 2) AS UNSIGNED) DESC
  LIMIT 1;
  `;

  db.query(getMaxUserIdQuery, (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ success: false, error: "Error retrieving user ID." });
    }

    // Retrieve the maximum user ID and increment it by 1
    let maxUserId = result[0].user_id; // Corrected property name
    console.log(maxUserId);
    let nextUserId = incrementUserId(maxUserId);
    console.log(nextUserId);

    // Check if the email already exists in the database
    const checkEmailQuery = "SELECT * FROM users WHERE email = ?";
    db.query(checkEmailQuery, [req.body.email], (err, emailResult) => {
      if (err) {
        console.error(err);
        return res.json({ success: false, error: "Error checking email." });
      }

      if (emailResult.length > 0) {
        // Email already exists, return an error message or toast
        return res.json({ success: false, error: "Email already exists." });
      } else {
        // Proceed with the insertion
        const q = `INSERT INTO users (user_id, user_name, phone_number, address, gender, email, password) VALUES (?, ?, ?, ?, ?,?, ?)`;
        const values = [
          nextUserId,
          req.body.user_name,
          req.body.phone_number,
          req.body.address,
          req.body.gender,
          req.body.email,
          req.body.password,
        ];

        db.query(q, values, (err, result) => {
          if (err) {
            console.error(err);
            return res.json({
              success: false,
              error: "Error inserting data into the database.",
            });
          }
          console.log("Data inserted successfully");
          return res.json({
            success: true,
            message: "Data inserted successfully",
          });
        });
      }
    });
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Check if the email and password match an existing user in the database
  const q = `SELECT * FROM users WHERE email = ? AND password = ?`;
  const values = [email, password];

  db.query(q, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ success: false, error: "Error retrieving user." });
    }

    // Check if a user with the provided email and password exists
    if (result.length === 0) {
      return res.json({ success: false, error: "Invalid email or password." });
    }

    // User login successful
    const user_id = result[0].user_id; // Assuming the user_id column exists in the users table
    console.log(`Login successful. User ID: ${user_id}`);
    return res.json({ success: true, message: "Login successful.", user_id });
  });
});

app.post("/home", (req, res) => {
  const { userId, scholarshipId, pageId, step } = req.body;

  const replaceQuery = `REPLACE INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
                        VALUES (?, ?, ?, ?)`;
  const replaceValues = [userId, scholarshipId, pageId, step];

  db.query(replaceQuery, replaceValues, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "Error replacing data in user_scholarship_page table.",
      });
    }

    console.log("Record replaced successfully");
    return res.json({ success: true, message: "Record replaced successfully" });
  });
});

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

// POST route to add user-scholarship data to the user_scholarship table
app.post("/applyScholarship", (req, res) => {
  const { user_id, scholarship_id } = req.body;
  console.log(user_id);
  console.log(scholarship_id);

  // Check if the provided user_id and scholarship_id are valid
  if (!user_id || !scholarship_id) {
    return res.json({
      success: false,
      error: "Invalid user_id or scholarship_id.",
    });
  }

  // Proceed with the insertion
  const insertQuery =
    "INSERT INTO user_scholarship (user_id, scholarship_id) VALUES (?, ?)";
  const values = [user_id, scholarship_id];

  db.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error(
        "Error inserting data into the user_scholarship table:",
        err
      );
      return res.json({
        success: false,
        error: "Error inserting data into the user_scholarship table.",
      });
    }

    console.log("Data inserted into user_scholarship table successfully");
    return res.json({
      success: true,
      message: "Data inserted into user_scholarship table successfully",
    });
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

app.get("/allUsers", (req, res) => {
  const getAllUsersQuery = "SELECT * FROM users";

  db.query(getAllUsersQuery, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: "Error fetching data from users table.",
      });
    }

    // If the query is successful, send the user details as a response
    // console.log(result);
    return res.json(result);
  });
});
app.get("/user_scholarship_data", (req, res) => {
  const getAllUserScholarshipDataQuery = `
    SELECT usp.user_id, usp.scholarship_id, u.*
    FROM user_scholarship usp
    JOIN users u ON usp.user_id = u.user_id
  `;

  db.query(getAllUserScholarshipDataQuery, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error:
          "Error fetching data from user_scholarship_page and users tables.",
      });
    }

    // If the query is successful, send the combined data as a response
    return res.json(result);
  });
});

app.listen(8800, () => {
  console.log("connected to backend");
});
