
const length=prompt("please enter length ")
const mass =prompt("please enter mass")
if(mass>0 & length>0){
console.log(mass/(length*length));
}else{
    console.log("mass or length can not be less than 0");
}