const fs = require("fs")
let data = "" ;

let arrayOfJsfiles = [
    "lib/Render/render.js",
    "lib/Insert/inset.js"
]

for (const file of arrayOfJsfiles) {
    let fileread = fs.readFileSync(file)
    data += fileread + "\n"
    console.log(`writing file ${file} is done`);
}
console.log("\n");
console.log("everything is done");
fs.appendFileSync("dist/applecake.js" , data )