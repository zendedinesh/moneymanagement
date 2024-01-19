// controllers/expenseController.js
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const AddexpenseSchema = require('../models/Addexpenseuser');

exports.addexpenseTomongodb = asyncHandler(async (req, res, next) => {
  const { Description, ExpenseDate, ExpenseAmount, Categories } = req.body;

  // Addexpense to mongodbdatabase
  const userexpense = await AddexpenseSchema.create({
    Description,
    ExpenseDate,
    ExpenseAmount,
    Categories,
    userId: req.user.id
  });

  res.status(200).json({ success: true, userexpense });

});

exports.getmyexpenses = asyncHandler(async (req, res, next) => {
  // Fetch expenses for the authenticated user
  const myexpenses = await AddexpenseSchema.find({ userId: req.user.id })
  .populate('userId', 'email name role')
  
  res.status(200).json({ success: true,  myexpenses }); 
});

