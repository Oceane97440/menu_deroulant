const indexController = {};
const fs = require("fs");



indexController.index = (req, res) => { // GET : /
    fs.readFile("users.json", (err, file) => {
        
        if (err) console.log(err);
        data = JSON.parse(file);
        console.log(data);

        res.render("index", { data: data });
      });

};

indexController.info = (req, res) => {
        fs.readFile("users.json", (err, file) => {
          if (err) console.log(err);
          data = JSON.parse(file).filter(id => {
            return id.id == req.params.id;
          });
      
          res.send(data);
        });
 
  };

//   controller.qrcode= (req, res, next) => {


//     IDURL.findById(req.params.item, (err, url) => {
  
//     QRCode.toDataURL(url.url, function (err, qrcode) {
//       console.log(qrcode);
  
//       //res.render('qrcode.ejs',{qrcode});
  
//       res.send(qrcode);
  
//     });
  
//    });
//   };
  

module.exports = indexController;