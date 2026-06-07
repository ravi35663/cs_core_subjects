const isANumber = (number=undefined)=>{
   const num = number === undefined? Number(process.argv[2]): Number(number);
   if(num || num===0) {
    return num;
   }
   return false;
}

module.exports  = isANumber;