'use strict';
//#region chained-methods
/* class Calc{
  constructor(num){
    this.num=num;
    this.sum=num;
  }
  plus=function(n1){
    this.n1=n1;
    this.sum+=n1;
    return this;
  }
  minus=function(n2){
    this.n2=n2;
    this.sum-=n2;
    return this;
  }
  multiply=function(n3){
    this.n3=n3;
    this.sum*=n3;
    return this;
  }
  divide=function(n4){
    this.n4=n4;
    this.sum/=n4;
    return this;
  }
}
const result = new Calc(50).plus(6).minus(30).multiply(3).divide(2);
console.log(result.sum); */
//#endregion
//task-2
//#region calculator
/* const btnPlus=document.getElementById("btn-plus");
const btnMinus=document.getElementById("btn-minus");
const btnMultiply=document.getElementById("btn-multiply");
const btnDivide=document.getElementById("btn-divide");
let inputResult=document.getElementById("input-result");

btnPlus.addEventListener("click",function(){
  let num1=parseInt(document.getElementById("input-num1").value);
  let num2=parseInt(document.getElementById("input-num2").value);
  if(!(num1 || num2)) return alert("Number - 1 or Number - 2 can't be empty");
  const res=num1+num2;
  inputResult.value=res;
});

btnMinus.addEventListener("click",function(){
  let num1=parseInt(document.getElementById("input-num1").value);
  let num2=parseInt(document.getElementById("input-num2").value);
  if(!(num1 || num2)) return alert("Number - 1 or Number - 2 can't be empty");
  const res=num1-num2;
  inputResult.value=res;
});

btnMultiply.addEventListener("click",function(){
  let num1=parseInt(document.getElementById("input-num1").value);
  let num2=parseInt(document.getElementById("input-num2").value);
  if(!(num1 || num2)) return alert("Number - 1 or Number - 2 can't be empty");
  const res=num1*num2;
  inputResult.value=res;
});

btnDivide.addEventListener("click",function(){
  let num1=parseInt(document.getElementById("input-num1").value);
  let num2=parseInt(document.getElementById("input-num2").value);
  if(!(num1 || num2)) return alert("Number - 1 or Number - 2 can't be empty");
  if (num2 === 0) return alert("Cannot divide by zero");
  const res=num1/num2;
  inputResult.value=res;
}); */
//#endregion
// task-3
//#region NewList
const items = document.querySelectorAll(".item");
let newItems = [];
items.forEach(item => newItems.push(item.innerHTML));
let res = newItems.filter((value, index, array) => array.indexOf(value) === index);
let newList = document.createElement("ul");
let newListHeader = document.createElement("h3");
newListHeader.innerText = "NewList";
document.body.appendChild(newListHeader);
res.forEach(item => {
  let newItem = document.createElement("li");
  newItem.innerText = item;
  newList.appendChild(newItem);
});
document.body.appendChild(newList); 
//#endregion

