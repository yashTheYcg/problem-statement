const express = require('express');
const app = express();
var cors = require('cors');
const port = 8080;

app.use(cors());
app.use(express.json());


// by this we can only update the order one by one
app.put('/updatenote',async(req,res)=>{
    console.log(req.body);

    // Requiring fs module
const fs = require("fs");

// Writing to our JSON file
var newData2 = JSON.stringify(req.body);
fs.writeFile("updatedOrder.json", newData2, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
});
})



app.listen(port, ()=>{
    console.log(`backend is litening at http://localhost:${port}`);
})

