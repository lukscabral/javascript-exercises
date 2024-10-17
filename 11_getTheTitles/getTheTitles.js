
const getTheTitles = function(arg) {
    const value = arg.map((x) => x.title)
    return value
}

// Do not edit below this line
module.exports = getTheTitles;


/*
    let colecao = 0;
    colecao = Object.values(x);//trouxe os objetos 
    value = [colecao[0].title, colecao[1].title];//fez um array na mao dos title de cada objeto dentro do "books"
    return value
=============================================================
let colecao = 0;
    colecao = Object.values(x);//trouxe os objetos 
    let temp = [];
    let value =[];
  

    for(let i= 0;i<colecao.length; i++){
        temp = colecao[i].title;
        value.push(temp);
    }
    return value
}
*/