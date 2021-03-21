let ranArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let randomNumb = Math.floor(Math.random() * 10);

let answer;
const ran1 = String(Math.floor(Math.random() * 10));
const ran2 = String(Math.floor(Math.random() * 10));
const ran3 = String(Math.floor(Math.random() * 10));
const ran4 = String(Math.floor(Math.random() * 10));
const ran5 = String(Math.floor(Math.random() * 10));
const ran6 = String(Math.floor(Math.random() * 10));
//let rands = ran1 + ran2 + ran3 + ran4 + ran5 + ran6;
let rands = [ran1, ran2, ran3, ran4, ran5, ran6];
let randsJoin = rands.join('');//배열 쉼표 제거
console.log(rands);//랜덤 배열 순서 안에 랜덤숫자

function shuffle(a){
  let j, x, i;
  for(let i = a.length; i; i -= 1){
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
  console.log(a);//배열 순서 그대로 숫자만 변경
}
let shuf = shuffle(rands);
//console.log(shuf);

//let txtRand = document.querySelector('.random');
//txtRand.wrtie(rands);
document.querySelector('.random').createTextNode(randsJoin);