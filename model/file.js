const mongoose = require('mongoose')
const {Schema}= mongoose





const fileSchema = new Schema({
    fileName:{type: String, require:true},
    path:{ type: String, require:true},
    fileSize:{ type: Number, require:true},
    uuid:{ type: String, require:true},
    sender:{ type: String, require:false},
    receiver:{ type: String, require:false},
},{timestamps:true} )


module.exports = mongoose.model('File', fileSchema);


