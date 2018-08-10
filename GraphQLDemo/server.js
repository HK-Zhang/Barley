const axios = require('axios')
const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema2.js')

const app = express()

app.use('/graphql', expressGraphQL({
	schema: schema,
	graphiql: true
}))

app.get('/api', (req, res) => {
	res.json({ data: 'hello' })
})

app.listen(4000, () => {
	console.log('Server is listening on port 4000...')
})