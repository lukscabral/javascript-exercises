const sumAll = function(a,b) {
let is_intA = Number.isInteger(a);
let is_intB = Number.isInteger(b);
let value = 0;

if(a >= 0 && b >=0 && is_intA == true && is_intB == true){
    if(a < b){
        for(let i = a; i<=b; i++){
            value += i;
        }return value
    }else {
        for(let i = b; i<=a; i++){
            value += i;
        }return value
    }
} else {
    return "ERROR"
}
    
};
// Do not edit below this line
module.exports = sumAll;
