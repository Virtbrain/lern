d=document
d.write("<h4>Удаление свойств и методов</h4>")
var colors={
    red:"красный",
    yellow:"желтый",
    green:"зеленый",
    show:function(){
        with(d){
            write("Свойства и методы объкта:<br>")
            for(var s in this){
                write(s+" | ")
            }
            write("<hr>")
        }
    }
}

colors.show()
delete colors.red
colors.show()
delete colors.yellow
colors.show()
delete colors.show

var tst='"show" in colors'
d.write(tst+" -> "+eval(tst)+"<br>")
tst='"green" in colors'
d.write(tst+" -> "+eval(tst))