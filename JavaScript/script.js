show ("Функция show()")
var f
f = show
f("Теперь это функцийя f()")
show = "Текстовое значение"
document.write(show+"<br>")

f("Снова функция f()")
function show(msg){
    document.write(msg+"<br>")
}