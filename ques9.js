
var  list1 = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
let list2 = [];
for (i of list1) {
    for (j in i) {
        if (!list2.includes(i[j])) {
            list2.push(i[j]);
        }
    }
}
console.log(list2);

