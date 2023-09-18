const express = require('express'); 
const PORT = process.env.PORT || 3030;
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());


app.use(express.static(path.join(__dirname, 'dist/my-app')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/my-app/index.html'));
});


// app.listen(process.env.PORT);
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

app.listen(3030);