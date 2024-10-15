const palindromes = function (arg) {
    let text_a = arg.replace(/[^\w]/g, "");//remove pontuaçoes
    text_a = text_a.toLowerCase(); //transforma td em minuscula
    let text_b = '';
    text_b = text_a.split("");//array de letras individuais
    text_b = text_b.reverse().join("");//reverte e junta novamente
    if(text_b == text_a){
        return true
    }else return false
    
};
//funciona pq ingles tem pontuaçoes diferentes
// Do not edit below this line
module.exports = palindromes;
