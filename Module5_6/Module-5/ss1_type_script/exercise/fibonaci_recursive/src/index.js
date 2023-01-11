// happy coding 👻
/*B1: tim day so fibonaci*/
var fibonaci = function (num) {
    if (num <= 1) {
        return num;
    }
    return fibonaci(num - 1) + fibonaci(num - 2);
};
var sum = 0;
var num = 100;
var myArray = [];
for (var i = 0; i <= num; i++) {
    myArray.push(fibonaci(i));
    sum += fibonaci(i);
}
console.log(myArray);
console.log(sum);
