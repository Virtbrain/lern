var myText = "Глобальная переменная"
document.write(myText+"<br>")

function show(){
    var myText = "Локальная переменная"
    document.write(myText+"<br>")
}

show()
document.write(myText+"<br>")