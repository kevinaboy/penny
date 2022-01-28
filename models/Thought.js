const { Schema, Types, model } = require('mongoose');
var dayjs = require('dayjs')

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => {
      return Types.ObjectId()
    }
  }
})

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timeStamp) => {
      return dayjs(timeStamp).format('MM DD YYYY h:mm:ss a');
    }
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [ReactionSchema]
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;

