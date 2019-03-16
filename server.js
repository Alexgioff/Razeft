const express = require('express');
const bodyParser = require('body-parser');
const data = require('./routes/api/data');
const movies = require('./routes/api/movies');
const series = require('./routes/api/series');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/api/data', data);
app.use('/api/movies', movies);
app.use('/api/series', series)

    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    });


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server starter on ${PORT}`));