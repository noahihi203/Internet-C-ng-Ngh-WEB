import orderService from "../services/orderService";

let handleCreateOrder = async (req, res) => {
  try {
    let response = await orderService.createOrder(req.body.user_id, req.body.payment_type, req.body.addressShipping);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server!",
    });
  }
};

module.exports = {
  handleCreateOrder,
};
