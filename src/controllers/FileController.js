const File = require('../models/File');
const Box = require('../models/Box');


class FileController {
    async store(req, res){
        const box = await Box.findById(req.params.id);

        const file = await File.create({
            title: req.file.originalname,
            path: req.file.key,

        });

        box.files.push(file);

        await box.save();

        req.io.sockets.in(box_id).emit("file", file);
        
        return res.json(file);
    }
}

/*para acessar aos métodos da classe */
module.exports = new FileController();