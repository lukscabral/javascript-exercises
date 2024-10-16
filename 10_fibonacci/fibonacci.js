const fibonacci = function(arg) {
    arg = arg.toString();

    if(arg == 0){
        return 0
    } else if (arg < 0){
        return "OOPS"
    }else {
        const x = [1,1];
        fib = arg - 1;
        let value =0;
        for(i=2;i<=arg; i++){
            value = x[i-1]+x[i-2];
        x.push(value)
        }return x[fib]
}

};

// Do not edit below this line
module.exports = fibonacci;
