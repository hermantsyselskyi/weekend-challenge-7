const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback',(req,res)=>{
    let formData = req.body;
    let queryText = `INSERT INTO feedback (feeling, content, support, comment)
                    values($1,$2,3$,4$);`
pool.query(quertText,[formData.feeling,formData.content,formData.support,formData.comment])
    .then(response => {
        res.sendStatus(201);
    })
})

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});