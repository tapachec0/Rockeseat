const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
/*
-exportar um objeto com alguma config do multer 
-path --> padronizar diretorios. WIN é \ Ubuntu /, e ai padroniza isso
-__dirname --> retorna onde o arquivo multer está
- tudo de upload vai pra pasta tmp
*/
module.exports = {
    dest: path.resolve(__dirname,'..', '..', 'tmp'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname,'..', '..', 'tmp'));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err);
                
                file.key = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, file.key);
            });
        }
    })
};