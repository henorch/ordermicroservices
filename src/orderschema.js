import mongoose from "mongoose";
const Schema = mongoose.Schema

const orderItemSchema = new Schema({
    product: { 
      type: Schema.Types.ObjectId, 
      ref: 'Product', 
      required: true 
    },
    quantity: { 
      type: Number, 
      required: true, 
      min: [1, 'Quantity can not be less then 1.'] 
    },
    price: { 
      type: Number, 
      required: true 
    }
  }, { _id: false }); 
  
  
  const orderSchema = new Schema({
    customer: { 
      type: Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    items: [orderItemSchema],
    total: { 
      type: Number, 
      required: true 
    },
    status: { 
      type: String, 
      required: true, 
      enum: ['CREATED',
        'DELIVERED',
        'CANCELLED',
        'SHIPPED',
        'PROCESSING'], 
      default: 'CREATED' 
    },
    createdAt: { 
      type: Date, 
      default: Date.now 
    },
    updatedAt: { 
      type: Date, 
      default: Date.now 
    }
  });
  
  const Order = mongoose.model('Order', orderSchema);
  export default Order;