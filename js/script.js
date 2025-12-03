var x=document.querySelector(".cal")
function append(val){
    x.value+=val
}
function clearDisplay(){
    x.value=""
}
function deleteLast(){
    x.value=x.value.slice(0,-1)
}
function calculate(){
    x.value=eval(x.value)
}