/*
==> Note:
    ->  We need to test some api data, so we just cannot make api calls for testing for 
        some reasons:
        1)  Costly API calls
        2)  Slow response
    ->  What we will do is we create mock data and use that data only.

*/ 
const mockResponse = {
    data: {
      results: [
        {
          name: { first: "Ravi", last: "Kumar" },
          picture: { large: "https://randomuser.me/api/portraits/men/12.jpg" },
          login: { username: "The Goat", uuid: "ertgyhjk" }
        }
      ]
    }
  };
  
// export default {
//     __esModule: true, 
//     get:jest.fn().mockResolvedValue(mockResponse),
// }
module.exports = {
    get: jest.fn().mockResolvedValue(mockResponse),
};