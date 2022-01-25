const { Schema, model } = require('mongoose');
const {dateFormat} = require('../utils/date')
const reactionSchema = require('./Reaction')

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: dateFormat,
    },
    username: { 
      type: String,
      required: true,
    },
  reactions: [reactionSchema],
},
{
    toJSON: {
      getters: true,
    },
  }
);

thoughtSchema.virtual('reactionCount').get(function (){
    return this.reactions.length;
});
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
