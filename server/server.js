const express = require("express")
 const bodyParser = require("body-parser")
 const mongoose = require("mongoose")
 require('dotenv').config();
 const morgan = require("morgan")
 const helmet = require("helmet");

 const {ValidateToken} = require("./middleware/auth")

 const app = express()
 const userRouter = require('./Routes/api/user-routes.js');
 
const brokenEgssRouter = require('./Routes/api/brokenData-routes.js');
  const eggDataRouter = require('./Routes/api/eggData-routes.js');
 const fertilizationDataRouter = require('./Routes/api/fertilizationData-routes.js');
 const hatchingDataRouter = require('./Routes/api/hatching-routes.js');
 const Labs = require('./Routes/api/Labs-routes');






 const mongourl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`

 mongoose.connect(mongourl  ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}, ()=>{
    console.log("conected to db")
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan())
app.use(helmet({
    contentSecurityPolicy: false,
  }));
app.use(ValidateToken);


app.use(express.static("./public")) // make public folder available to use as a static asset




app.use("/api/users",userRouter)
app.use("/api/Labs",Labs)
app.use("/api/broken", brokenEgssRouter)
app.use("/api/eggData",eggDataRouter)
app.use("/api/fertilization",fertilizationDataRouter)
app.use("/api/hatching",hatchingDataRouter)



app.use(express.static('client/build'))

if(process.env.NODE_ENV === 'production'){
    const path = require('path')
    app.get('/*' , (req,res)=>{
        res.sendFile(path.resolve(__dirname , '../client', 'build' , 'index.html'))
    })
}else {
    app.get("/"  ,(req,res)=>{
        console.log(req.user)
        res.send("welcome from home page")
    })
}


const port = process.env.PORT || 5000;
app.listen(port,()=>{
    
    console.log(`Server running on port ${port}`)
})