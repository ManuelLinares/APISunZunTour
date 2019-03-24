const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('Server working OK')
})

module.exports = router