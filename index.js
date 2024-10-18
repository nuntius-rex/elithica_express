const express=require('express');
const reload=require('reload');
const app=express();
const port='7000';

//Express Static:
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(port);
console.log(`Listening on http://localhost:${port}`);

console.log("Hello Class!");

reload(app);
