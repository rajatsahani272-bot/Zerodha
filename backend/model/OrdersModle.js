const {modle}=require("mongoose");

const {OrdersSchema, OrdersSchema}=require("../schemas/OrdersSchema");

const OrdersModle= modle("oder",OrdersSchema);

module.exports={OrdersModle};