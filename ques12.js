var my_dic = {'Alex': ['subj1', 'subj2', 'subj3'],'David': ['subj1', 'subj2']};
var c=0;
for (i in my_dic){
    for (j in my_dic[i]){
        c=c+1
    }
}
console.log(c)
    
    