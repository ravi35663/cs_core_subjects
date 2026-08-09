// //add.test.js
// const {add} = require('./add.js');

function add(a,b){
    return a+b;
}

// Unit testing 
test('adds 1 + 2 to equal 3',()=>{
    expect(add(1,2)).toBe(3)
})

test('object assignment',()=>{
    const data = {one:1}
    data["two"] = 2;
    expect(data).toEqual({one:1,two:2});
})

//Using Matchers
// test('object assignment', () => {
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one: 1, two: 2});
// });


/*
Testing Asynchronous Code
    ->  For example, let's say that fetchData returns a promise that is supposed to resolve to 
        the string 'peanut butter'. We could test it with:

*/
test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
});
