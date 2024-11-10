function GCD(a,b){
    let temp_a = a > b? a:b;
    let temp_b = a < b ? a: b;
    while(1){
        let r = temp_a % temp_b;
        if(r == 0 ){
            return temp_b;
        }
        temp_a = temp_b;
        temp_b = r;
    }
}

const num = [5,70];
console.log("GCD of two number is : ",GCD(...num));