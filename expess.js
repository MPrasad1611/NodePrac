const express = require('express');
const app = express();
app.get('/menu/:category/:dish',()=>{})
app.post('/order',(req,res)=>{
  res.send('order placed')

})
app.put('/order',()=>{})
app.delete('/order',()=>{})
app.patch('/order',()=>{})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})
