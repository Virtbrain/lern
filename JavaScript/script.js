//Верхняя граница суммы
var n=100;
//Индексная переменная
var k=1;
//Начальное значение суммы квадратов
var s=0;
//текст для отображения
var txt="1<sup>2</sup> + 2<sup>2</sup>+ ... +";
txt+=n+"<sup>2</sup>= ";

//Вычислдение суммы квадратов чисел:
while(k<=n){
    s+=k*k; //Добавление нового слагаемого
    k++; //Новое значение индексной переменной
}

//Отображение результата
document.write(txt+s)