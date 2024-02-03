const express = require('express');
const app = express();
const cors = require('cors')
// const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
 require('dotenv').config("");

// Middleware for parsing request bodies
app.use(express.json());
// app.use("/admin", adminRouter)
app.use(cors({
    origin:"*"
}))

app.use("/user", userRouter)
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});