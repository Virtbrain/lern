var A = {
    name: "Объект А",
    n:0,
    get number(){
        return this.n%10
    },
    set number(x){
        this.n=(x%10)
    }
}

A.number=123
d = document
d.write(A.name+"<br>"+A.number+"<hr>")

A.number=5
d.write(A.name+"<br>"+A.number+"<hr>")

A.n=12
d.write(A.name+"<br>"+A.number+"<hr>")