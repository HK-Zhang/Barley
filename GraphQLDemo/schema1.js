const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull
} = require('graphql')

const customers = [
	{ id: 1, name: "Max", email: "makskow@gmail.com", age: 27 },
	{ id: 2, name: "Waldek", email: "waldemar@gmail.com", age: 24 },
	{ id: 3, name: "Ferdynand", email: "ferdek@gmail.com", age: 43 },
]

const CustomerType = new GraphQLObjectType({
	name: 'Customer',
	fields: () => ({
		id: { type: GraphQLInt },
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
				for (let i = 0; i < customers.length; i++) {
					if (customers[i].id == args.id) {
						return customers[i]
					}
				}
			}
		},
		customers: {
			type: new GraphQLList(CustomerType),
			resolve(parentValue, args) {
				return customers
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery
})