const express = require('express');
const generateSubtitlesRoute = require('./api/generatesubtitles/route.js');
const cors = require('cors');
require('.env').config();

const app = express();

app.use(cors());
app.use(express.json());

// Route to handle audio upload + subtitle generation
app.use('/generateSubtitles', generateSubtitlesRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
