// go to the cmd and enter this command => $env:name=vaibhav ;
// go to the powershell and enter this command => $env:name="vaibhav" n ;
// $env:USENAME="sankar";
const userName = process.env.name;
console.log(process.env)
// console.log(process)
console.log("hello "+ userName);