var my_dict = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20 };
var m=0;
for( i in my_dict){
    if(my_dict[i]>m){
        m=my_dict[i]
    }
}
s=m
var m1=0;
for (j in my_dict){
    if(s> my_dict[j] && my_dict[j]>m1){
        m1=my_dict[j]
    }
}
s1=m1
var m2=0
for(k in my_dict){
    if (s1>my_dict[k] && my_dict[k]>m2 && s>s1 ){
        m2=my_dict[k]
    }
}
console.log([m2,m1,m])

