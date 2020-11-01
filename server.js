const express = require('express')
const app = express()


const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

app.get('/users/:uid', (req, res) => {
    console.log(req.params.id)
    res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.get('/users', (req, res) => {
    res.json({
        success: true,
 	 	message: 'successfully got users. Nice!',
 	 	users: mockUserData
    })
})

app.listen(8000, () => {
    console.log('server is running');
})