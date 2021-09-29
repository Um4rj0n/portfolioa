const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')
const apiRouter = require('./routes/api')
const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')




app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter)
app.use('/add', addRoutes)
app.use('/', coursesRoutes)

const PORT = process.env.PORT || 3001

async function start() {
  try {
    const url = `mongodb+srv://Umarjon007:4D3jawAVR2r5KOBr@cluster0.7ksdl.mongodb.net/Projects`
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, err => {
      if (err) throw err;
      console.log('Connected to MongoDB!!!')
    })
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}
start()