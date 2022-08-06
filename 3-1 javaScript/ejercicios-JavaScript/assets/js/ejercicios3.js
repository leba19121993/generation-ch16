let xValue = 100
while (xValue > 0){
    xValue = xValue - 0.5
    for (let x = 0; x < xValue; x++){
        if (xValue % 2 === 1){
            console.log(`El numero ${xValue} es impar`)
        }
    }
}


console.log("\nNumeros entre corchetes");

let j=1;
let n= 5;
while(j <=n){
    console.log("[" + j +"]");
    j++;
}

console.log("\nSuma de los primero n enteros positivos");
let sum =0;
let num =20;
console.log("n = " + num);

while(num >= 0){
    sum = sum + num;
    num--;
}
console.log("suma = " + sum);