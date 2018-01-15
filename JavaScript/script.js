var A={number:100}
Object.prototype.name = "Объект А"
for(var s in A){
    document.write(s+" | ")
}

test('"toString" in A')
test('"valueOf" in A')
test('"constructor" in A')

function test(txt){
    document.write("<br>"+txt+" -> "+eval(txt))
}