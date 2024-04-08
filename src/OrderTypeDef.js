
const typeDefs = `#graphql

    enum orderStatus {
        CREATED
        DELIVERED
        CANCELLED
        SHIPPED
        PROCESSING
    }

    type Order {
        id: ID!
        status: orderStatus!
        items: [orderItem!]!
        total: Float!
        createAt: String!
        }

    type orderItem {
        product: String!
        quantity: String!
        price: Float!
    } 
    input OrderInput {
        quantity:Int!
        productIds: ID!
        }
    type Query {
        allOrder: [Order!]!
        orderById(orderId: ID): Order!
        orderByUser(userId: ID): [Order]!
    }

    type Mutation {
        createOrder(customerId: ID!, item:[OrderInput]): Order!
        updateOrder(orderbyId: ID!, status: orderStatus!): Order!
        deleteOrder(id: ID!): Boolean!
    }        
    `
export default typeDefs;