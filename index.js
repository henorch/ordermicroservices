import { ApolloServer } from '@apollo/server'
import typeDefs from './src/OrderTypeDef.js'
import resolvers from './src/orderResolver.js'
import { startStandaloneServer } from '@apollo/server/standalone'
import { config } from './utils/config.js'
import { DatabaseConnection } from './utils/dbConnection.js'

DatabaseConnection()


const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    cors: {
        origin:"*",
        credentials: true,
    }
})


const {url} = await startStandaloneServer(server, {
    listen:{port: config.PORT}
})

console.log(`order microservice is already running ${url}`);