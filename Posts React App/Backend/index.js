// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const port = 5000;

// // Connect to MongoDB
// mongoose
//   .connect("mongodb://localhost/noticeboard", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// // Create the Notice schema and model
// const noticeSchema = new mongoose.Schema({
//   authorName: String,
//   title: String,
//   description: String,
//   date: { type: Date, default: Date.now },
// });

// const Notice = mongoose.model("Notice", noticeSchema);

// // Express routes for handling CRUD operations on notices
// app.get("/api/notices", (req, res) => {
//   Notice.find()
//     .then((notices) => {
//       res.json(notices);
//     })
//     .catch((error) => {
//       console.error("Error fetching notices:", error);
//       res.status(500).json({ error: "Failed to fetch notices" });
//     });
// });

// app.post("/api/notices", (req, res) => {
//   const { authorName, title, description } = req.body;
//   const notice = new Notice({ authorName, title, description });
//   notice
//     .save()
//     .then(() => {
//       res.sendStatus(201);
//     })
//     .catch((error) => {
//       console.error("Error creating notice:", error);
//       res.status(500).json({ error: "Failed to create notice" });
//     });
// });

// app.put("/api/notices/:id", (req, res) => {
//   const { id } = req.params;
//   const { authorName, title, description } = req.body;
//   Notice.findByIdAndUpdate(id, { authorName, title, description })
//     .then(() => {
//       res.sendStatus(204);
//     })
//     .catch((error) => {
//       console.error("Error updating notice:", error);
//       res.status(500).json({ error: "Failed to update notice" });
//     });
// });

// app.delete("/api/notices/:id", (req, res) => {
//   const { id } = req.params;
//   Notice.findByIdAndDelete(id)
//     .then(() => {
//       res.sendStatus(204);
//     })
//     .catch((error) => {
//       console.error("Error deleting notice:", error);
//       res.status(500).json({ error: "Failed to delete notice" });
//     });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB configuration
mongoose.connect('mongodb://localhost/notices', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Notice schema and model
const noticeSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
});
const Notice = mongoose.model('Notice', noticeSchema);

// Express middleware for JSON parsing
app.use(express.json());

// API routes
app.get('/api/notices', (req, res) => {
  Notice.find({}, (err, notices) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    } else {
      res.json(notices);
    }
  });
});

app.post('/api/notices', (req, res) => {
  const { author, title, description } = req.body;
  const notice = new Notice({ author, title, description });
  notice.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    } else {
      res.json({ success: true });
    }
  });
});

app.put('/api/notices/:id', (req, res) => {
  const { id } = req.params;
  const { author, title, description } = req.body;
  Notice.findByIdAndUpdate(
    id,
    { author, title, description },
    { new: true },
    (err, updatedNotice) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      } else {
        res.json(updatedNotice);
      }
    }
  );
});

app.delete('/api/notices/:id', (req, res) => {
  const { id } = req.params;
  Notice.findByIdAndDelete(id, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    } else {
      res.json({ success: true });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});