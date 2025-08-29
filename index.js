const express = require('express');
const bfhlRoutes = require('./routes/bfhlRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Make a POST request to /bfhl with a JSON body to use this API. By yours truly- Shashwat Dwivedi');
});

app.use('/', bfhlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
