const express = require('express');
const mongoose = require('mongoose');
const {MONGOURI} = require('./Keys');

const app = express();
const PORT = 5000;

// connect to mongo db
mongoose.connect(MONGOURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose.connection.on("connected", () =>{
    console.log("Connected to MongoDB.");
});

mongoose.connection.on("error", (err) =>{
    console.log("Can't connect to MongoDB " + err);
});

// showing routes 
require("./models/post");
require("./models/category");

app.use(express.json());

//routers 
app.use(require("./routes/post"));
app.use(require("./routes/category"));


app.listen(PORT, () => {
    console.log("Server started!");
})

