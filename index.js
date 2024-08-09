const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

dotEnv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((error) => console.log(error));

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/', (req, res) => {
  res.send("<h1>TODO-APP</h1>");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started and running at ${PORT}`);
});
