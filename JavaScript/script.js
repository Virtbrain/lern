function MyObject(name,number){
    this.name = name
    this.number = number
    this.show=function(){
        for(var s in this){
            if(s!="show"){
                document.write(s+" -> "+this[s]+" | ")
            }
        }
        document.write("<br>")
    }
}

var A = new MyObject("Объект А",100)
var B = new MyObject("Объект В",200)

document.write("<b>Свойства созданных объектов:</b><br>")
A.show()
B.show()

MyObject.prototype.color="Прозрачный"
document.write("<b>После добавления свойства:</b><br>")
A.show()
B.show()

A.color = "Белый"

delete MyObject.prototype.color
document.write("<b>После удаления свойства:</b><br>")
A.show()
B.show()

document.write("<b>Проверка прототипа объекта</b><br>")
var txt="Object.getPrototypeOf(A)==MyObject.prototype"
document.write(txt+" -> "+eval(txt))