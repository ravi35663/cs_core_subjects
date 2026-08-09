// exports.handler = async () => {
//   return {
//     statusCode: 200,
//     body: "Hello from Terraform Lambda 🚀"
//   };
// };

exports.handler = async ()=>{
    console.log("Hello, This is Ravi from earth")
    return {
        statusCode:200,
        body:"Hello world from Terraform Lambda:"
    }
}