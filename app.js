const express =  require('express'),
      mongoose = require('mongoose'),
      app      = express()

mongoose.connect('mongodb://localhost:27017/KeepCount', {
    useNewUrlParser: true, 
    useUnifiedTopology: true})
.then( () => console.log("Connection succesful")
).catch( err => console.log('Connection failed ' + err))


app.post('/admin/product', (req, res) => {
    console.log( req.body)
    
})







app.listen(3000, ()=>{console.log("listening on port 3000")})