const mongoose = require('mongoose')

//Database name created here in the connection method
mongoose.connect('mongodb://localhost/scribe',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log("Connected to Scribes database")
}).catch((err) => {
    console.log(err)
})