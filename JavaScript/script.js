function f(x){
    if(x<0){
        return 0
    }
    else{
        if(x<2){
            return x*x
        }
        else{
            if(x<5){
                return 6-x
            }
            else{
                return 1
            }
        }
    }
}

document.write("<h4>Кусочно-гладкая функция</h4>")
document.write('<img src="function.jpg" wight="500" height="300" alt="нет картинки"><br>')

var z
z = 9*Math.random()-2
document.write("Случайный аргумент: <b>"+z+"</b><br>")
document.write("Значение функции: <b>"+f(z)+"</b>")