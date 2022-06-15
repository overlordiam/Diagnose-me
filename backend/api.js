const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

app.use(cors())

app.post('/image', upload.single('file'), function (req, res) {
  res.json({})
})
const port = 4000
app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`)
})