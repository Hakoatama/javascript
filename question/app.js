//section6-Q1
let random = Math.floor(Math.random() * 10);
console.log(random);


//section6-Q2
setTimeout(() => {
  console.log('Hello World!');
}, 3000);

//section6-Q3
let num = 0;
if (num > 0) {
  console.log('num is greater than 0');
}else if (num < 0){
  console.log('num is less than 0');
}else if (num === 0){
  console.log('num is 0');
};

//section6-Q4
let numbers = [];

for (let i = 0; i < 100; i++) {
  console.log (numbers);
};

//section6-Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] === "number") {
        if (mixed[i] % 2 === 0) {
            console.log("even");
        } else {
            console.log("odd");
        }
    } else {
        console.log("not number");
    }
};

