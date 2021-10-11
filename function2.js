const chalk = require("chalk");
const fs = require("fs")


const Counter = (arr) => {
    let sum = 0;
    for (const iterator of arr) {
        sum += iterator;
    }
    return sum;
};

//targil 1.1
function arraySum(arr) {
  let sum = Counter(arr);
  console.log(sum);
}
module.exports.arraySum = arraySum;

//targil 1.2
function arraySumBlue(arr) {
  let sum = Counter(arr);
  console.log(chalk.blue(sum));
}
module.exports.arraySumBlue = arraySumBlue;

//targil 1.3
function arrayBoldYellow(arr) {
  let sum = Counter(arr);
  console.log(chalk.yellow.bold.underline((sum)));
}
module.exports.arrayBoldYellow = arrayBoldYellow;

//targil 1.4
function wirteToFile(text){
    try {
        fs.appendFileSync("onlytext.txt",text);
    } catch (error) {
        console.log(error);
    }
}
module.exports.wirteToFile = wirteToFile;

//targil 1.5
function readingFromFile(path){
    fs.readFile(path,"utf8",(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    })
}
module.exports.readingFromFile = readingFromFile;

//1.6
function readingSyncFromFile(path){
    try {
        fs.readFileSync(path,"utf8");
    } catch (error) {
        console.log(error);
    }
}
module.exports.readingSyncFromFile = readingSyncFromFile;

//1.7
function textToAddress(path,text){
    try {
        fs.appendFileSync(path,text);
    } catch (error) {
        console.log(error);
    }
}
module.exports.textToAddress = textToAddress;


//2 qwestion
/*

מודולים מובנים חשובים כי בעזרתם נוכל להתמש בפונק׳ מובנות לשימוש עצמי באפליקציה
מודלים שיצרנו נוכל להשתמש בהם במקומות אחרים של הקוד כשנצטרך מבלי לכתוב אותם 
מודלים צד שלישי נוכל לקחת פונק׳ שאחרים כתבו ולהתשמש בהם לצורך שימוש באפליקציה.

__  בכל המקרים כולם עוזרים לנו לשמור על הקטע נקי ומוסדר ומבלי לחזור על עצמינו שוב ושוב __
*///5 qwestion
const axios = require('axios')
const url = `https://jsonplaceholder.typicode.com/posts`;   
axios.get(url)
    .then(function (response) {
      // handle success
      console.log(`got Success fetching all the posts`);
      if (response.status == 200) {
        let posts = response;
        // console.log(posts);
        for (const iterator of posts.data) {
            func2.textToAddress("jsonplaceholder.text",`userId:${iterator.userId} ${iterator.title}\n`);
        }
      }
    })
    .catch(function (error) {
      // handle error
      console.log(`got   Error`);
      console.log(error);
    });





