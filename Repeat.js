function repeatStringNumTimes(str, num) {
    var sum='';
    var i;
    for(i=0; i<num; i+=1){
        sum=sum+str;

}
    console.log(sum);
    return sum;
}

repeatStringNumTimes("abc", 3);
