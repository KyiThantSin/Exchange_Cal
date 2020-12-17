let from=document.getElementById("from");
let to =document.getElementById("to");
let input=document.getElementById("input");
let result=document.getElementById("output-text");
let historyLists=document.getElementById("history_lists");

function createoption(x,y,z){
    let o=document.createElement("option");
    let t=document.createTextNode(y);
    o.setAttribute("value",toNum(z));
    o.appendChild(t);
    x.appendChild(o);

}
function createtr(x){

    let tr=document.createElement("tr");
    x.map(function(el){

    let td=document.createElement("td");
    let tex=document.createTextNode(el);
    td.appendChild(tex);
    tr.appendChild(td);
 //   historyLists.appendChild(td);
    })
    historyLists.appendChild(tr);
}
function toNum(x){
    return Number(x.replace(",",""));
}

for(x in data.rates){
    createoption(from,x,data.rates[x]);
    createoption(to,x,data.rates[x]);
    console.log(x,data.rates[x]);
}
document.getElementById('calc').addEventListener("submit",function(e){
    e.preventDefault();
    let x=input.value;
    let y=from.value;
    let z=to.value;

    console.log(x,y,z);
let fromText=x+" "+from.options[from.selectedIndex].innerText;
let toText=to.options[to.selectedIndex].innerText;
    let first= x*y;
    let second=first/z;
    let result=second.toFixed(3);
    console.log(second.toFixed(3));
    document.getElementById('output-text').innerHTML=result;
    let date2=new Date().toLocaleString();
    //making array
    let arr=[date2,fromText,toText,result];
    createtr(arr);

    //changing dafault
    input.value="";
    input.focus();
    from.value="";
    to.value=1; 
})
//function test(){
   // console.log(from.options[from.selectedIndex].innerText);
    
 // }
  //function test1(){
     // console.log(to.options[from.selectedIndex].innerText);
     
  //}
 

//about date
var span=document.getElementById('span');
function time(){
var d=new Date();
var y=d.getFullYear();
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var mon=months[d.getMonth()];
var days=d.getDate();
var h=d.getHours();
var m=d.getMinutes();
var s=d.getSeconds();
span.innerHTML=y+" "+mon+" "+days+", "+h+":"+m+":"+s;
}
setInterval(time,1000);
