const port = process.env.PORT || 5000;

const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

mongoose.connect('mongodb+srv://arcnc:arcnc@arcnc-07ogu.mongodb.net/arcnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(port);