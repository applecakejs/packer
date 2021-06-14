const fs = require("fs");
const chalk = require("chalk")
let data = "";

const Pack = (arrayOfJsfiles , filenamedist ) => {

  for (const file of arrayOfJsfiles) {
    let fileread = fs.readFileSync(file);
    data += fileread + "\n";
    
    console.log(chalk.cyanBright(`writing file ${file} is done`));
  }
  console.log("\n");
  console.log(chalk.greenBright("everything is done"));
  fs.mkdir("dist")
  fs.writeFileSync(`${filenamedist}.js`, data);
};

module.exports = {
    Pack
}
fs.mkdir("dist")
