const mongoose = require('mongoose');

/*schema é como se fosse uma tabela */
const File = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    files: []
}, {
    /*mostra data de criação e edição de arquivo */
    timestamps:true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

File.virtual("url").get(function() {
    return `http://localhost:3333/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('File', File);