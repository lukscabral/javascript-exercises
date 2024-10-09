const removeFromArray = function(array,...args) {
    let array_del_duplicates = new Set(array);//transforma em set e remove duplicatas
    let array_result = Array.from(array_del_duplicates);//retorna a ser array 
    
    for(let arg of args){ 
        if(array_result.includes(arg)) {
        let index = array_result.indexOf(arg); 
        array_result.splice(index,1);   //ta ficando complexo pra krl
        } else{
            console.log("else")
        }
    }return array_result
};

// Do not edit below this line
module.exports = removeFromArray;
