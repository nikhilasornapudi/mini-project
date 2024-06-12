const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');

const url = 'mongodb+srv://Cluster77178:ZH1Wd2F4XXV6@cluster77178.iqtl6hq.mongodb.net/?retryWrites=true&w=majority';
let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

mongoose.connect(url, {dbName : "nodedb"})
.then(() => {
    console.log("Connected to the database");
}, (errRes) => {
    console.log("Connection failed", errRes);
    process.exit();
});

let PORT = 4000;
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

app.use("/", productRoutes);
app.use("/", userRoutes);
app.use("/", cartRoutes);




