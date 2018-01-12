d=document
var txt='"name" in Math'
d.write(txt+" -> "+eval(txt)+"<br>")

var A={color:"red"}
var B= new Object()
B.number=100
showAll()

Object.prototype.name="объект А"
d.write(txt+" -> "+eval(txt)+"<br>")
showAll()

B.name = "объект B"
d.write("Math.name -> "+Math.name+"<br>")
showAll()

delete Object.prototype.name
d.write(txt+" -> "+eval(txt)+"<br>")
showAll()

function show(obj){
    for(var s in obj){
        d.write(s+" -> "+obj[s]+" | ")
    }
    d.write("<br>")
}

function showAll(){
    d.write("Объект А:")
    show(A)
    d.write("Объект В:")
    show(B)
    d.write("<br>")
}