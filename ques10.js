
var dic={};
var i =0;
while (i<=10){
    var readlineSync=require("readline-sync");
    var name=readlineSync.question("enter yours name ");
    var marks=readlineSync.questionInt("enter your marks ");
    dic[name]=marks;
    i++
}
console.log(dic)