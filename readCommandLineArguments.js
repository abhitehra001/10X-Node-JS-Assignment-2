const arguments = process.argv;
let name = arguments[2]
for (let i=3;i<arguments.length;i++){
    name += " ";
    name += arguments[i];
}
console.log("Hello",name);