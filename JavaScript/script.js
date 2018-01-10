var X={
    color:"red",
    number:123,
    show:function(arg){
        document.write("<b>"+arg+"</b>:")
        for(var s in this){
            if(s!="show"){
                document.write(s+" -> "+this[s]+" | ")
            }
        }
        document.write("<br>")
    }
}

var A=Object.create(X)

var B=Object.create(X)

showAll()
A.color="yellow"
A.number=321
B.color="green"

showAll()
X.name = "proto"
A.state = true

showAll()
delete X.number
delete A.color

showAll()

function showAll(){
    X.show("X")
    A.show("A")
    B.show("B")
    document.write("<hr>")
}