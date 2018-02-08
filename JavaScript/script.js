function sum(){
    var s
    if((arguments.length>0)&&(typeof(arguments[0])=="string")){
        s=""
    }
    else{
        s=0
    }
    for(var k=0;k<arguments.length;k++){
        s+=arguments[k]
    }
    return s
}

d = document
d.write("Сумма чисел: "+sum(1,4,2,7,3)+"<br>")
d.write("Сумма чисел: "+sum(1,2,3)+"<br>")
d.write("Сумма чисел: "+sum()+"<br>")
d.write("Сумма чисел: "+sum("один","четыре","два","семь","три")+"<br>")

