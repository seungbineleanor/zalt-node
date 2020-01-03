const mongoose = require('mongoose');

const formSubmissionSharingSchema = mongoose.Schema({
  form_submission_id: mongoose.Schema.Types.ObjectId,
  user_id: mongoose.Schema.Types.ObjectId
});

//set up model which is a wrapper on the schema
module.exports = mongoose.model("FormSubmissionSharing", formSubmissionSharingSchema);
