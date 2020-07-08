fs = require('fs')
fs.readFile("test.txt", function(err, data){
    if (err){
        console.log("There was an error")
    }
    else{
        console.log("Data of " + __filename +  " file is:" + data.toString())
    }
})
console.log("End of execution")