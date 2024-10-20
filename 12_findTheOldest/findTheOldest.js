const findTheOldest = function(people) {
  let value={};
  let year = new Date().getFullYear();
  let older_one ;
  let current_one;
    value = people.reduce((older,current) => {
        older_one = (older.yearOfDeath || year) - older.yearOfBirth;
        current_one = (current.yearOfDeath || year) - current.yearOfBirth;
        return current_one > older_one ? current : older;
    });
    return value
};

// Do not edit below this line
module.exports = findTheOldest;
/*
varias tentativas com if retornando NaN
============================================================
let value=[];
  let name_value=[];
  let result = {};
  let index_of_last =0;
  let last = 0;

  value = people.map((x) => x.yearOfDeath - x.yearOfBirth);
  name_value = people.map((x)=> x.name);
    
    for(let i of value){  //for no array value p achar o maior numero
        let current = i;
        if(current >= last){
            last = current;
        }else {
            last = last;}//last é o maior
        }

    index_of_last = value.indexOf(last);//acha indice de last dentro de value
    result = name_value[index_of_last]; //pega o name do indice correspondente ao last

   //console.log(result)
  return result //retorna ray mas o teste pede a resposta como {name:'Ray'}

*/