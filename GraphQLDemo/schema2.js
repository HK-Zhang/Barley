const axios = require('axios')
const API_URL = 'http://localhost:3000'

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull
} = require('graphql')

const CustomerType = new GraphQLObjectType({
	name: 'Customer',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		age: { type: GraphQLInt }
	})
})

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		customer: {
			type: CustomerType,
			args: {
				id: { type: GraphQLInt }
			},
			resolve(parentValue, args) {
				return axios.get(`${API_URL}/customers/${args.id}`)
					.then(res => res.data)
			}
		},
		customers: {
			type: new GraphQLList(CustomerType),
			resolve(parentValue, args) {
				return axios.get(`${API_URL}/customers`)
				.then(res => res.data)
			}
		}
	}
})

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addCustomer: {
			type: CustomerType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				email: { type: new GraphQLNonNull(GraphQLString) },
				age: { type: new GraphQLNonNull(GraphQLInt) },
			},
			resolve(parentValue, args) {
				return axios.post(`${API_URL}/customers`, {
					name: args.name,
					email: args.email,
					age: args.name
				})
				.then(res => res.data)
			}
		},
		editCustomer: {
			type: CustomerType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLInt) },
				name: { type: GraphQLString },
				email: { type: GraphQLString },
				age: { type: GraphQLInt }
			},
			resolve(parentValue, args) {
				return axios.patch(`${API_URL}/customers/${args.id}`, args)
					.then(res => res.data)
			}
		},
		deleteCustomer: {
			type: CustomerType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLInt) }
			},
			resolve(parentValue, args) {
				return axios.delete(`${API_URL}/customers/${args.id}`)
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: mutation
})