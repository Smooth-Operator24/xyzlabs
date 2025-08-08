const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const DUMMY_USER = {
  username: "admin",
  password: "test123"
};

app.use(cors());
app.use(bodyParser.json());

// ✅ Serve frontend
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
    res.json({ message: "Login successful", user: { username } });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
});

app.post('/register', (req, res) => {
  res.status(200).json({ message: "Registration is disabled in prototype." });
});

// ✅ Handle React/HTML routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🧪 Amin App backend running at http://localhost:${PORT}`);
});
