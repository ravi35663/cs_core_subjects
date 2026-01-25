/*
Stock Span Problem:
    Write a class StockSpanner which collects daily price quotes for some stock, and returns 
    the span of that stock's price for the current day.
    The span of the stock's price today is defined as the maximum number of consecutive 
    days (starting from today and going backwards) for which the price of the stock was 
    less than or equal to today's price.

    For example, if the price of a stock over the next 7 days were 
    [100, 80, 60, 70, 60, 75, 85], then the stock spans would be [1, 1, 1, 2, 1, 4, 6].

    Input Format:
        In the function an integer vector is passed representing daily prices.
    Output Format:
        Return an integer vector representing the span of that stock's price.
*/

function stockSpanner(prices){
    let span = [1];
    let stack = [{index:0,value:prices[0]}];
    for(let i=1;i<prices.length;i++){
        let item = prices[i];
        let len = stack.length-1;
        if(item < stack[len].value){
            stack.push({index:i,value:item});
            span.push(i - stack[len].index)
        }else{
            let stack_item = stack.pop();
            while(stack_item && stack_item.value <= item){
                stack_item = stack.pop();
            }
            if(stack_item == undefined){
                span.push(i+1);
                stack.push({index:i,value:item});
            }else{
                span.push(i-stack_item.index);
                stack.push(stack_item);
            }
            stack.push({index:i,value:item});
        }
    }
    return span
}

// const prices = [100, 80, 60, 70, 60, 75, 85];

const test_cases = [
    {input:[100, 80, 60, 70, 60, 75, 85], output: [1, 1, 1, 2, 1, 4, 6]},
    {input:[100, 90, 95], output: [ 1, 1, 2 ]},
    {input:[28, 14, 28, 35, 46, 53, 66, 80, 87, 88], output: [1,1,3,4,5,6,7,8,9,10]},
    {input:[100, 80, 60, 70, 200, 75, 85], output: [1,1,1,2,5,1,2]},
    {input:[97,80,60,50,50,35,85], output: [1, 1, 1, 1, 2, 1, 6 ]}

]

const prices = [100, 90, 95]
test_cases.forEach((item,i)=>{
    const output = stockSpanner(item.input);
    let passed = true;
    for(let i=0;i<output.length;i++){
        if(output[i] != item.output[i]){
            passed = false;
            break;
        }
    }
    if(passed){
        console.log(`${i+1} Passed:`)
    }else{
        console.log(`${i+1} Failed:`)
    }
})