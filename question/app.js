//section5-Q1
let nickname ='ごっしー';
let age = 28;
let text = '私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。';

console.log(text);


//section5-Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

let likelanguage = languages[0];
let nextlanguage = languages[3];

let templateText = `私の好きな言語は${likelanguage}です。次は${nextlanguage}を勉強してみたいです。`;

console.log(templateText);


//section5-Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);


//section5-Q4,Q5
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

//section5-Q4
console.log(playerList[1].favorites[1]);

//section5-Q5
let human1 = playerList[0].age;
let human2 = playerList[1].age;
let human3 = playerList[2].age;

console.log((human1 + human2 + human3)/3);


//section5-Q6
function sayHello() {
  console.log('Hello');
};

sayHello();

let sayWorld = function() {
  console.log("World");
};

sayWorld();


//section5-Q7  birthday プロパティの追加

user['birthday'] = '2000-09-27';

console.log(user);


//section5-Q7  メソッド sayHello を追加
user.sayHello = function() {
  console.log("Hello!");
};

user.sayHello();


//section5-Q8  add メソッド
let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
};

calc.add(3, 4);


//section5-Q8  subtract メソッド
calc.subtract = function(x, y) {
  console.log(x - y);
};

calc.subtract(15, 5);


//section5-Q8  multiply メソッド
calc.multiply = function(x, y) {
  console.log(x * y);
};

calc.multiply(7, 7);


//section5-Q8  divide メソッド
calc.divide = function(x, y) {
  console.log(x / y);
};

calc.divide(15, 3);


//section5-Q9
function remainder(x, y) {
  return x % y;
}

const result = remainder(5, 3);
console.log(`5 を 3 で割った剰余は ${result} です。`);


//section5-Q10
/*

function foo() {
  let x = 1;
}
console.log(x);

上記のconsole.log(x); において、コンソールに1が出力されることはなく
「x is not defined」というエラーが出るのは、定義した関数fooの中で、
変数xを定義しているから。
JavaScriptでは、関数の外で定義した変数は関数の中からでも参照できるが、
今回のように関数の中で定義した変数の有効範囲は関数の中でしか使えない。
この変数の有効範囲のことをスコープという。

*/




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
  numbers.push(i);
};

console.log (numbers);


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

