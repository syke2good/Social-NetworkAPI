const { Schema, model, Types } = require('mongoose');
const {dateFormat} = require('../utils/date')

// Schema to create Student model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: { 
      type: String,
      required: true,
    },
  createdAt: {
      type: Date,
      default: Date.now,
      get: dateFormat,
  },
},
{
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reactionSchema;
