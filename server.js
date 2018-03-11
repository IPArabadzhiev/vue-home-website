// server.js
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const appDir = path.resolve(__dirname, "dist");

const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/arabadzhiev-home');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connection established');
});
/**
 * Schemas - string
 */
const stringSchema = mongoose.Schema({
    key: String,
    value: String
});

/**
 * Schemas - package
 */
const packageSchema = mongoose.Schema({
    name: String,
    strings: [stringSchema]
});

/**
 * Schemas - language
 */
const languageSchema = mongoose.Schema({
    name: String,
    packages: [packageSchema]
});

/**
 * Models - language
 */
const Language = mongoose.model('Language', languageSchema);

app = express();
app.use(express.static(appDir));

app.get('/api/getTexts/:pageName', (req, res) => {
    // res.json({ message: 'Welcome to the Server', page: req.params.pageName });
    // Language.collection.save({
    //     name: 'en',
    //     packages: [{
    //         name: req.params.pageName,
    //         strings: [{
    //             key: 'name',
    //             value: 'ASDSDA'
    //         }]
    //     }]
    // }, function (err, en) {
    //     if (err) return console.error(err);
    //     const s = Language.findOne({name: 'en'}).then((record) => {
    //         console.log(record);
    //     });
    //     console.log(en)
    // });
    // console.log(Language.packages);
    Language.findOne({ name: 'en' }, function (err, r) {
    }).then((record) => {
        console.log(record.packages);
        record.packages.push({name: 'tt', strings:[{key: 't1', value:'t2'}]});
        record.save();
    });
});

app.get("*", function (req, res) {
    res.sendFile(path.resolve(appDir, 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);
