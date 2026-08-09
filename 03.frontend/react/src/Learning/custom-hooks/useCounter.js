import { useState } from "react";

const useCounter = ()=>{
    const [count,setCount] = useState(0);

    const increment = ()=>{
        setCount(count=> count+1);
    }

    const decrement = ()=>{
        setCount(count=> count-1);
    }

    return {increment,decrement,count};
}

export default useCounter;