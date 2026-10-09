function appendtodisplay(x){
    document.getElementById("div1").innerHTML+=x
}
function cleardisplay(){
    document.getElementById("div1").innerHTML="";
    document.getElementById("div2").innerHTML="0";
}
function calc(){
    document.getElementById("div2").innerHTML=eval(document.getElementById("div1").innerHTML)
}
function deletedisplay(){
    document.getElementById("div1").innerHTML=document.getElementById("div1").innerHTML.substring(0, document.getElementById("div1").innerHTML.length-1)
}