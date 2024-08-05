const f = require('fs')
console.log(f)

//async
f.readFile(__dirname + "/student.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log("web design full stack")

//const data = f.readFilesync(__dirname + "'hello.txt","utf-8");
//console.log(data);
// console.log('hello pninfosys')

//try{
// f.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{
//  if(err) throw err;
// console.log(data);    
// })
// }

try {
    f.readFile(__dirname + "/student.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
    });
} catch (error) {
    console.log(error)
}
console.log("web design full stack")
