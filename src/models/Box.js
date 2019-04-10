const mongoose = require('mongoose');

/*schema é como se fosse uma tabela */
const Box = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    files: [{type: mongoose.Schema.Types.ObjectId, ref: "File"}]
}, {
    timestamps:true
});

module.exports = mongoose.model('Box', Box);