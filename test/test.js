var path = require('path');
var fs = require('fs');
var tempAccount = {id: 1234, task: 'learn webpack'};
fs.writeFile(path.join(__dirname, 'account.json'), JSON.stringify(req.body), function (err) {
    if (err) throw err;
    console.log("Export Account Success!");
});