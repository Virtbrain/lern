d=document
var colors={red:"красный",yellow:"желтый",green:"зеленый"}

var a="red" in colors
var b="blue" in colors

d.write("Наличие свойства red: "+a+"<br>")
d.write("Наличие свойства blue: "+b+"<br>")