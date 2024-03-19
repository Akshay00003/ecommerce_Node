const Address = require("../Models/AddressModel");

module.exports.Create = async (req, res) => {
  try {
    const { id, address } = req.body;
    const response = await Address.create({ userId: id, address: address });
    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: message.error });
  }
};
module.exports.getSingleAddress = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Address.find({ _id: id });
    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
