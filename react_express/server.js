const express = require('express');
const app = express();
const PORT = 5000;
 
app.get('/name',(req,res)=>{
    const data = {
        lastname : "lewe",
        firstname : "youn"
    };
    res.json(data);
})
 
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})