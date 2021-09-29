const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('api', {
        title: 'проекты',
        isApi: true
    })
})
module.exports = router;