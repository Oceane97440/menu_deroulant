const indexController = {};
const fs = require("fs");



indexController.index = (req, res) => { // GET : /
    fs.readFile("./users.json", "utf8", (err, file) => {
        
        if (err) console.log(err);
        data = JSON.parse(file);
        console.log(data);

        res.render("index", { data: data });
      });

}

module.exports = indexController;