const fs=require('fs/promises');
const fileNames=require('./config.json');
const Countable=require('countable')


async function openFile(filename){
   try{ 
    const data=await fs.readFile(filename,'utf-8');
     Countable.count(data, counter => console.log(filename+": "+counter.words+" words")); 
} 
catch(error) {
            console.log("error occurred while reading the file: "+filename);     
}
}

for (const file of fileNames["files"]) {
    openFile(file);
  }
