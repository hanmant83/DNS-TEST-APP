const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
    
    res.json({message: 'Success'})

})


app.listen(3000, '0.0.0.0', () => {
    console.log('App running')
})