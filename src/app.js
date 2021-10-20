const { moduleExpression } = require('@babel/types');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ status: 'Success' });

});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));

module.exports = app