// controllers/expenseController.js
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const ExpenseSchema = require('../models/Addexpenseuser');
const UserSchema = require('../models/User');
const Addusersalary = require('../models/Addsalary')
const bcrypt = require('bcrypt');

// 1) Addexpensetomongodb
exports.addexpenseTomongodb = asyncHandler(async (req, res, next) => {
  const { Description, ExpenseDate, ExpenseAmount, Categories } = req.body;

  // const mycurrentDate = new Date();
  // const myexpenseDate = new Date(ExpenseDate);

  // if (myexpenseDate > currentDate) {
  //   return res.status(400).json({ success: false, error: 'You can\'t add a future date' });
  // }


  // Addexpense to mongodbdatabase
  const userexpense = await ExpenseSchema.create({
    Description,
    ExpenseDate,
    ExpenseAmount,
    Categories,
    userId: req.user.id
  });

  res.status(200).json({ success: true, userexpense });

});

//2) getallexpense
exports.getmyexpenses = asyncHandler(async (req, res, next) => {
  // Fetch expenses for the authenticated user
  const myexpenses = await ExpenseSchema.find({ userId: req.user.id }).select('-_id -__v')
    .populate('userId', 'email name role')

  res.status(200).json({ success: true, myexpenses });
});

//3)getexpenseby date,discription,category

exports.getexpensebycategories = asyncHandler(async (req, res, next) => {
  const { category, expensedate, description, skip, take } = req.query;
  console.log("numberofpage - ", skip);
  console.log("numberofpage - ", take)
  if (!skip) {
    return next(new ErrorResponse("no pages to skip"))
  }

  if (!take) {
    return next(new ErrorResponse("not set the  page limit"))
  }

  const myquery = { userId: req.user.id };
  if (category) {
    myquery["Categories"] = category;
  }
  if (description) {
    myquery["Description"] = description;
  }
  if (expensedate) {
    myquery["ExpenseDate"] = expensedate;
  }

  const expensebycategory = await ExpenseSchema.find(myquery).skip(skip).limit(take).select('-_id -__v -userId')
  console.log('Category: ', category);
  console.log('Description: ', description);
  console.log('Expensedate: ', expensedate);
  console.log('Expenses by Category:', expensebycategory);

  res.status(200).json({ success: true, expensebycategory });
});


//4)editexpensebyuser

exports.editbyuser = asyncHandler(async (req, res, next) => {
  const { Description, ExpenseDate, ExpenseAmount, Categories } = req.body;
  console.log(req.body)
  const { id } = req.query;

  console.log("expenseid", id)

  const editmyexpense = await ExpenseSchema.findByIdAndUpdate(id, {
    Description,
    ExpenseDate,
    ExpenseAmount,
    Categories
  }, { new: true }) 

  console.log(editmyexpense)
  res.status(200).json({ success: true, editmyexpense });
});

//5)deletexpensebyuser
exports.deletebyuser = asyncHandler(async (req, res, next) => {

  const { id } = req.query
  const deleteexpense = await ExpenseSchema.findByIdAndDelete(id)
  res.status(200).json({ success: true, deleteexpense })
})

//edituserfrofile 
exports.editprofile = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body
  const userId = req.user.id
  const hashedPassword = await bcrypt.hash(password, 10);
  const edituserprofile = await UserSchema.findByIdAndUpdate(userId, {
    name,
    email,
    password: hashedPassword,
    role

  }, { new: true });
  console.log(edituserprofile)
  res.status(200).json({ success: true, edituserprofile })
})

exports.addusersalary = asyncHandler(async (req, res, next) => {

  console.log("add salary 1")
  const { Monthlysalary } = req.body
  const addsalary = await Addusersalary.create({
    Monthlysalary
  });
  console.log("add salary 2")
  res.status(200).json({ success: true, addsalary })
})
