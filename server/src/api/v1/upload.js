var fs = require('fs')

module.exports = (app) => {

  let version = 1;

  var multer = require('multer');

  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'static/public/images/uploads')
    },
    filename: (req, file, cb) => {
      // cb(null, file.fieldname + '-' + Date.now())
      cb(null, `image-${Date.now()}.png`)
    }
  });
  var upload = multer({ storage: storage });

  app.post(`/api/v${version}/images`, upload.single('file-upload'), (req, res) => {
    let reponse = { 
      filename: req.file.filename,
      path: `public/images/uploads/${req.file.filename}`,
      uri: `/api/v${version}/images/${req.file.filename}`
    }
    res.status(200).send(reponse);
    //res.redirect('/');
  });


  app.post(`/api/v${version}/images-old`, (req, res) => {
    console.log('recebendo imagem')

    var filename = req.headers.filename;

    req.pipe(fs.createWriteStream('files/' + filename))
      .on('finish', () => {
        console.log('arquivo escrito');
        res.status(201).send('ok');
      })

  })

}