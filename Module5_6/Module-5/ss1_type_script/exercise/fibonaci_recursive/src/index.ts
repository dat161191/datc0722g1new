// happy coding 👻
/*B1: tim day so fibonaci = de qui*/
let fibonaci = (num: number): number => {
    if (num <= 1) {
        return num;
    }
    return fibonaci(num - 1) + fibonaci(num - 2);
}
/* B2: push vao mang va tinh tong day fibo*/
let sum: number = 0;
let num: number = 15;
let myArray: Array<number> = [];
for (let i = 0; i <= num; i++) {
    myArray.push(fibonaci(i));
    sum += fibonaci(i);
}
console.log(myArray);
console.log(sum);
