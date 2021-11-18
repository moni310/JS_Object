var readlineSync=require("readline-sync");
var user=readlineSync.questionInt("enter the number  ");
var dic={};
var i=1;
while (i<=user){
    dic[i]=i*i
    i=i+1
}
console.log(dic)