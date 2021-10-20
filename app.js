var path = require('path');


const { moduleExpression } = require('@babel/types');
const express = require('express');
const app = express();


// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));


app.get('/', (req, res) => {
    // res.send({ status: 'Success' });
    res.render('index.ejs');

});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));

module.exports = app