import express from 'express'

const app = express()

app.use('/api/register', (req, res) => {
  res.send('Simple register endpoint')
}) 

app.listen(3000, () => {
  console.log('Server is running on port 3000.')
})
