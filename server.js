const express = require('express')
const app = express()
const bodyParser = require('body-parser')


const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

app.use(bodyParser.json());

app.post('/login', (req, res) => {
	const userName = req.body.userName;
	const password = req.body.password;

	const mockUserName = 'naimishSingh'
	const mockPassword = 'naimishSingh'

	if (userName === mockUserName && password === mockPassword) {
		res.json({
			success: true,
			message: 'password and username match!',
			token: 'encrypted token goes here'
		})
	} else {
		res.json({
			success: false,
			message: 'password and username do not match'
	   })
	}
})

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