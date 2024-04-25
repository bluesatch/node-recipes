const express = require('express')
const router = express.Router()

router.use(express.static('public'))

router.use('/recipes', require('./api/recipeRoutes'))

// Home Page
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Recipe App',
        name: 'My Recipe App'
    })
})


// Error Page 
router.get('*', (req, res)=> {
    if (req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.render('pages/404', {
            title: '404 Error',
            name: '404 Error'
        })
    }
})

module.exports = router