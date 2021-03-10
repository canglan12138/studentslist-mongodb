var mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/itcast', {useNewUrlParser: true, useUnifiedTopology: true});

var studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['男','女'],
    required: true
  },
  age: {
    type: Number,
  },
  hobbies: {
    type: String
  }
})
//导出模型构造函数
module.exports = mongoose.model('Student',studentSchema)