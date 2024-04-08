import { orderService } from './orderService.js';


const resolvers = {
    Query: {
        orderById: async (_, {orderId}) => {
            try {
                const order = await orderService.GetorderById(orderId)
                return order
            } catch (error) {
                console.log(`Order with this kind of id does not exist`);
                throw error;
            }
        },


        allOrder: async () => {
            try {
                const allorder = await orderService.GetAllOrder();
                return allorder
                
            } catch (error) {
                console.error(`No order currently available`);
                throw error;
            }
        },


        orderByUser: async (_, { userId }) => {
            try {
                const cus_order = await orderService.GetOrderByCustomer(userId);
                return cus_order;
            } catch (error) {
                console.error(`No order available`);
                throw error
            }
        }
    }
}

export default resolvers;