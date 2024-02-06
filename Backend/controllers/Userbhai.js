// const Userdata = require("../models/Userdata.js")
// const Address = require("../models/Address.js");
// const asyncHandler = require("../middleware/async");
// const ErrorResponse = require("../utils/errorResponse");
const Userdata = require("../models/Userdata.js")
const Address = require("../models/Address.js");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
exports.Userone = asyncHandler(async (req, res, next) => {

    const { name, salary, department } = req.body

    const userinfo = await Userdata.create({
        name,
        salary,
        department
    })

    res.status(200).json({ success: true, userinfo })

})


exports.Useraddress = asyncHandler(async (req, res, next) => {
    const { name, address, amount } = req.body

    const useradd = await Address.create({
        name,
        address,
        amount
    })
    res.status(200).json({ success: true, useradd });
})



// exports.UserTransaction = asyncHandler(async (req, res, next) => {
//     const { name1, name2, salary, department, address, amount } = req.body;

//     const session = await Userdata.startSession();

//     try {
//         // Start the transaction
//         await session.startTransaction();

//         const userinfo = await Userdata.create(
//             [{ name: name1, salary, department }],
//             { session: session }
//         );

//         const useradd = await Address.create(
//             [{ name: name2, address, amount }],
//             { session: session }
//         );

//         // Commit the transaction
//         await session.commitTransaction();

//         res.status(200).json({ success: true, userinfo, useradd });
//     } catch (error) {
//         console.error(error);

//         // Rollback the transaction
//         await session.abortTransaction();

//         res.status(500).json({ success: false, error: 'Transaction failed' });
//     } finally {
//         session.endSession();
//     }
// });




exports.UserTransaction = asyncHandler(async (req, res, next) => {
    const { name1, name2, salary, department, address, amount, _id } = req.body;

    const session = await Userdata.startSession();

    try {

        await session.startTransaction();


        const userinfo = await Userdata.create(
            [{ name: name1, salary, department }],
            { session: session }
        );


        const useradd = await Address.create(
            [{ name: name2, address, amount }],
            { session: session }
        );


        const updatedUser = await Userdata.findOneAndUpdate(
            { _id: "65c1e1f6b7813dd882b60ee5" },
            // { $set: { department: "manager" } }, 
            { salary: 10 }, 
            { new: true, session: session }  
        );

        const deletedUser = await Userdata.findOneAndDelete(
            { _id: _id },
            { session: session }
        );

        const getuser = await Userdata.findById(_id);
        await session.commitTransaction();

        res.status(200).json({ success: true, userinfo, useradd, updatedUser, deletedUser, getuser });
    } catch (error) {
        console.error(error);

        // Rollback the transaction
        await session.abortTransaction();

        res.status(500).json({ success: false, error: 'Transaction failed' });
    } finally {
        session.endSession();
    }
});
