// controllers/expenseController.js
// const moment = require('moment');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const ExpenseSchema = require('../models/Addexpenseuser');
const UserSchema = require('../models/User');
const Addusersalary = require('../models/Addsalary')
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
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
  // console.log("BACKEND...")
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
  console.log("id:", id)
  console.log("req.query:", req.query)
  console.log("req:", req)
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
  console.log("paramsObj :", id)
  console.log("id :", id)
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
  const { monthlysalary } = req.body;

  console.log("add salary 1")
  console.log("monthlysalary :", monthlysalary)
  const addsalary = await Addusersalary.create({
    monthlySalary: monthlysalary
  });
  console.log("add salary 2")
  res.status(200).json({ success: true, addsalary })
})

exports.totalmonthlyexpense = asyncHandler(async (req, res, next) => {


  const currentDate = new Date();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const currentuser = new mongoose.Types.ObjectId(req.user.id);
  // console.log("currentuser", currentuser)
  // console.log("currentDate", currentDate)
  // console.log("firstDayOfMonth", firstDayOfMonth)
  // console.log("lastDayOfMonth", lastDayOfMonth)

  const totalcount = await ExpenseSchema.aggregate([
    {
      $match: {
        userId: currentuser,
        ExpenseDate: {
          $gte: firstDayOfMonth,
          $lte: lastDayOfMonth
        }
      }
    },

    {
      $group: {
        _id: null,
        totalamount: { $sum: "$ExpenseAmount" },
        totaldocuments: { $sum: 1 }
      }
    }
  ]);

  res.status(200).json({ success: true, totalcount });

});



// console.log("firstday", firstDayOfMonth),
// console.log("lastday", lastDayOfMonth),