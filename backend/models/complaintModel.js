const mongoose = require("mongoose");

const complaintModel = mongoose.Schema(
  {
    complaint: { type: "String", required: true },
    solution: {type: "String"},
    dept: {type: "String", required: true },
    date: {type: "String", required: true },
  },
  { timestamps: true }
);

const Complaint = mongoose.model("Complaint", complaintModel);

module.exports = Complaint;