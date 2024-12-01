const asyncHandler = require("express-async-handler");
const Complaint = require("../models/complaintModel");

const allComplaints = asyncHandler(async (req, res) => {
  
  const keyword = req.query.search
    ? {
           complaint: { $regex: req.query.search, $options: "i" } ,
      }
    : {};

  const complaints = await Complaint.find(keyword);
  res.send(complaints);
});

const postComplaint = asyncHandler(async (req, res) => {
  const { complaint, solution, dept, date } = req.body;

  if (!complaint || !solution || !dept || !date) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }
 // console.log(name);
  //const userExists = await User.findOne({ email });
  //console.log(userExists);

 // if (userExists) {
//  res.status(400);
 //   throw new Error("User already exists");
 // }

  const user = await Complaint.create({
     complaint,
     solution,
     dept,
     date,
  });

  if (user) {
    res.status(201).json({
     complaint: user.complaint,
     solution: user.solution,
      dept: user.dept,
      date: user.date,
    });
  } else {
    res.status(400);
    throw new Error("Complaint not found");
  }
});

module.exports = { allComplaints, postComplaint};