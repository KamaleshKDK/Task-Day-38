const fs = require("fs");
const path = require("path")
console.log(process.argv[2]);

var files=[];
fs.readdir((process.argv[2]),{withFileTypes : true},function(err,files){
   if(err) throw err;
   files.map((obj)=>{
      if((obj.isDirectory()) == false){
         console.log(obj.name + "---" + "file")
files.push(files)
      }
      else {
         console.log(obj.name + "---" + "folder");
      }
   })
})












// fs.readdir(process.argv[2],{withFileTypes : true} ,function (err, files) {
//    files.map(file => {
//        if (err) throw err ;
//        else if (path.extname(file) ==''){
//         console.log(file +"folder");
//        }
//        else {  console.log(file + " file") }
//    })
// })

// console.log(path.join("folder2"));

// fs.readdir(process.argv[2],function (err, files) {
//   files.forEach(file => {
//       if(err ) throw err;
//       else if (path.extname(file) == "") {
//           console.log(file + " -- " + "folder");
//       } else {
//           console.log(file + " -- " + "file");
//       }
//   })
// })



   // fs.writeFile("index.html", "Hello World", function (err, data) {
    
    //     if (err) throw err;
    //     console.log("Your File is Created !!")
    // })
    
    // fs.readFile("index.html", "utf8", function (err, data) {
    //     if (err) throw err;
    //     console.log(data)
    // })