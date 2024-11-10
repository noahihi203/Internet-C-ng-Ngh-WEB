import orderService from "../services/orderService";

let handleCreateOrder = async (req, res) => {
  try {
    let response = await orderService.createOrder(
      req.body.user_id,
      req.body.payment_type,
      req.body.addressShipping
    );
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server!",
    });
  }
};

let handleGetOrder = async (req, res) => {
  try {
    let response = await orderService.getOrder(req.query.user_id);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server!",
    });
  }
};

let handleGetOrderByOrderStatus = async (req, res) => {
  try {
    let response = await orderService.getOrderByOrderStatus(
      req.query.user_id,
      req.query.status
    );
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server!",
    });
  }
};

let handleUpdateOrderStatus = async (req, res) => {
  try {
    let response = await orderService.updateOrderStatus(req.body);
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
  handleGetOrder,
  handleGetOrderByOrderStatus,
  handleUpdateOrderStatus,
};
