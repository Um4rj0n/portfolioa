const {Router} = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Добавить проект',
    isAdd: true
  })
})

router.post('/', async (req, res) => {
  const course = new Course({
    title: req.body.title,
    description: req.body.description,
    link: req.body.link,
    img: req.body.img,
  })

  try {
    await course.save()
    res.redirect('/')
  } catch (e) {
    console.log(e)
  }
})

module.exports = router