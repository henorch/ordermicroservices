import Order from "./orderschema.js";


export const orderService = {

     GetorderById:  async (orderId) => {
        try {
            const order = await Order.findById(orderId)
            return order
        } catch (error) {
            console.error(`This product does not exist `);
            throw error;
        }
       
    },

    GetAllOrder: async () => {
        try {
            const allorder = await Order.find({})
            return allorder 
        } catch (error) {
            console.error(`No other is currently available`);
            throw error
        }
    },

    GetOrderByCustomer: async ( userId ) => {
        try{
            const customer_order = await Order.find({ customer: userId})
            return customer_order    
        } catch (error){
            console.error(`The user does not exist or the order has not been created`);
            throw error
        }
    }
 
    
}
