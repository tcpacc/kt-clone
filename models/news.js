const mongoose = require('mongoose');
const schema = mongoose.Schema;

const newsSchema = new schema({
    header : {
        type: String,
        required : true,
    },
    image : {
        type: String,
        required : true
    },
    date : {
        type:String,
        required: false
    },
    firstSpan : {
        type: String,
        required: true
    },
    notFirstSpan : {
        type: String,
        required: true
    }
},{timestamps : true});

const news = mongoose.model('news', newsSchema);
module.exports = news;