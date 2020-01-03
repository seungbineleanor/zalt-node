const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const FormSubmissionSharing = require('./schemas/FormSubmissionSharing');

//open a connection
mongoose.connect(
  'mongodb+srv://new_user_32:XHlKYp2EfiaIQ20R@cluster0-lhbuj.mongodb.net/zalt_development?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  const app = express();
  app.use(cors());
  
   //middleware
  app.use((req, res, next) => {
    db.collection("session_tokens").findOne({ content: req.header('Zalt-Auth') }, (err, result) => {
      if (err) throw err;
      //obtain currently logged in user id
      //user id stored for use in other endpoints
      console.log(result);
      req.user_id = result.user_id;
      next();
    });
  });

  app.get('/', (req, res) => {
     console.log("We are connected");
  })

  app.get('/shared', (req, res) => {

    FormSubmissionSharing.find({ user_id : req.user_id }, (err, rows) => {
      if(err){
        console.log("error")
      }
      var formSubmissionIds = rows.map(row => row.form_submission_id);
      db.collection("form_submissions").find({ _id: { $in: formSubmissionIds } }).toArray((err, rows2) => {
        var form_names = rows2.map(row => row.form_name);
        res.send(form_names);
      });
    })

    // // create formSubmissionSharing object
    // const formSubmissionSharing = new FormSubmissionSharing({
    //   form_submission_id: ,
    //   user_id: req.user_id
    // });
    //
    // // store to database
    // formSubmissionSharing
    //   .save()
    //   .then(result => {
    //   console.log(result);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     res.status(500).json({error:err});
    //   });
    //
    // //refernce code
    // const id = req.params.productId;
    // Product.findById(id)
    //   .exec()
    //   .then(doc => {
    //     console.log("From ")
    //   })

  });

  const port = 3001;
  app.listen(port, () => console.log(`Listening on port ${port}...`));
});
