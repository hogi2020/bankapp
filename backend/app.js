const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/user');

app.use(cors());
app.use(express.json());
app.use('/user', userRouter);

const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});