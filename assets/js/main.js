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
//console.log(rands);//랜덤 배열 순서 안에 랜덤숫자

let randsJoin = rands.join('');//배열 쉼표 제거
//console.log(randsJoin);

function shuffle(a){
  let j, x, i;
  for(let i = a.length; i; i -= 1){
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
  //console.log(a);//배열 순서 그대로 숫자만 변경
}
let shuf = shuffle(rands);

/* 랜덤 출력 */
window.addEventListener('load', function(){
  let para = document.getElementById('random');
  let newtext = document.createTextNode(randsJoin);
  para.appendChild(newtext);
});

/* 입력되는 input태그 value값 불러오기 */
function inputVal() {
  let inpt = document.getElementById('umail').value;
  console.log(inpt);
}