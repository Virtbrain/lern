d=document
d.write("<h4>Цвета</h4>")
var colors={red:"красный",yellow:"желтый",green:"зеленый"}
for(var s in colors){
    d.write(s+" - "+colors[s]+"<br>")
}