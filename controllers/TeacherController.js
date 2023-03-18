export default {
  getByID: async (req, res) => {
    const customer = await Customer.findOne({
      _id: req.params.id,
      userId: req.user.id,
    }).exec();
    res.json(customer);
  },
  getAll: async (req, res) => {
    const customers = await Customer.find({
      userId: req.user.id,
    });
    res.json(customers);
  },
};
