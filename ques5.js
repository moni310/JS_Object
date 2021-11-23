var dic={"name":"Raju", "marks":56,"id":45,"school":"GGIC"};
var readlineSync=require("readline-sync");
var user=readlineSync.question("enter your name ")
for (i in dic){
    if (user in dic){
        console.log(user," is already exit  ")
        break
    }
    else{
        console.log(user," is not exit in this dic ")
        break
    }
}
