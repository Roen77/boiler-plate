const express = require('express')
const app = express()
const port = 5000

const mongoose=require('mongoose')
mongoose.connect(
    'mongodb+srv://roenhan:exma@clusterroen.an4ms.mongodb.net/roenhan?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:false
    }
  ).then(()=>console.log('몽고디비연결'))
.catch(err=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})