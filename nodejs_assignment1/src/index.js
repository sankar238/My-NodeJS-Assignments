const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	const data = await fs.writeFile(fileName,fileContent);
	return "success "
	// dont chnage function name	
}


const myFileReader = async (fileName) => {
	// write code here
	const data = await fs.readFile(fileName,"utf-8");
	console.log(data);
	// dont chnage function name
}



const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	const updateData= await fs.appendFile(fileName, fileContent);
	// dont chnage function name
}


const myFileDeleter = async (fileName) => {
	// write code here
	await fs.unlink(fileName);
	// dont chnage function name
}

myFileWriter("testfile","hello");
myFileReader("testfile");
myFileUpdater("testfile"," world");
myFileDeleter("testfile");


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }