
const fs  = require('node:fs')

// fs.appendFile(path, data(file data), cb fnc)
// fs.appendFile("hello.txt", "Hello World", (e) => {
//     if(e) console.log(error);
//     console.log("create hello.txt");
// });


// folder create
// fs.mkdir(path, cb fnc)
// fs.mkdir("css",{recursive: true}, (e) => {
//       if(e) console.log(error);
//     console.log("Create CSS Folder");
// });


// fs.mkdir("Home/Sections/Topbar",{recursive: true}, (e) => {
//       if(e) console.log(error);
//     console.log("Create Nested Home Folder");
// })

// fs.mkdir("Home/Footer",{recursive: true}, (e) => {
//       if(e) console.log(error);
//     console.log("Create Nested Footer");
// })

// fs.mkdir("Home/Layout",{recursive: true}, (e) => {
//       if(e) console.log(error);
//     console.log("Create Nested Home Layout");
// })

// fs.mkdir("Home/Componets",{recursive: true}, (e) =>{
//       if(e) console.log(error);
//     console.log("Create Nested Home Componets");
// })
// read file
// fs.readFile(path, cb fnc)
// fs.readFile("hello.txt","Utf-8", (e, data) => {
//       if(e) console.log(error);
//     console.log(data);
// });

// read folder
// fs.readdir(path, cd fnc)
// fs.readdir("Home", (e , files) => {
//     if (e) console.log(error);
//     console.log(files)
// })



// copy file
// fs.copyFile('old path with file name', 'new path with file name', cb)
// fs.copyFile('hello.txt', 'Home/Sections/copy.txt', (e) => {
//     if (e) throw error;
//     console.log('copy hello.txt into home folder')
// })

// rename file
// fs.rename('oldname with path', 'new name with path' cb fnc)
// fs.rename('hello.txt', 'world.txt',(e) => {
//     if (e) throw error;
//     console.log("rename sucessfully");
// })

// fs.rename('Home/Sections/copy.txt', 'Home/Sections/hello.txt',(e) => {
//     if (e) throw error;
//     console.log("rename sucessfully");
// })


// // rename folder
// fs.rename('Home/Footer', 'Home/Layout',(e) => {
//     if (e) throw e;
//     console.log("rename Folder sucessfully");
// })

// //rename folder
// fs.rename('Home/Footer', 'Home/Layout',(e) => {
//     if (e) throw error;
//     console.log("rename Folder sucessfully");
// })  


// delete file
//fs.rm(path, cb fnc)
// fs.rmdir("Home",{ recursive: true },(e)=>{
//     if(e) throw e;
//     console.log("Remove copy.txt");
// });

// delete folder
// fs.rmdir("CSS",{ recursive: true },(e)=>{
//     if(e) throw e;
//     console.log("Remove copy.txt");
// });

// fs.rm("world.txt", (e)=>{
//     if(e) throw e;
//     console.log("Remove copy.txt");
// });