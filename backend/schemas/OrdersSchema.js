const {Schema} =require("mongoose");

const OrdersSchema=new Schema({
    name:String,
    qty:Number,
    price:Number,
    modle:String,
    
});

module.exports={OrdersSchema};
