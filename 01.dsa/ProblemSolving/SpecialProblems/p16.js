/*
    ==> Javascript to Find Sum of Series 1 + 1/2 + 1/3 + 1/4 + ……. + 1/N
    it is harmonic progression
    here a = 1,d=1, 
    Sn = (1/d) * ln((2a+(2n-1)d)/(2a-d))
    ln=> natural log => base is e not 10
*/
const n = Number(process.argv[2]);
const a = 1;
const d = 1;
const Sn = (1/d)*Math.log(((2*a)+(2*n-1)*d)/(2*a-d));
console.log(`Sum of first ${n} of the series is: `,Sn);
