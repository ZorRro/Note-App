const FeedbackRouter = require("express").Router();
const Feedback = require("../model/feedback.model");

FeedbackRouter.post("/new", (req, res) => {
  if (!(req.body.name || req.body.comment)) {
    return res.status(402).json("Incomplete information.");
  }
  const feedback = new Feedback();
  feedback.name = req.body.name;
  feedback.comment = req.body.comment;

  feedback
    .save()
    .then(savedFeedback => {
      console.log("Feedback is saved");
      console.log(savedFeedback);
      return res.sendStatus(201);
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ message: "Failed saving the feedback." });
    });
});

module.exports = FeedbackRouter;
