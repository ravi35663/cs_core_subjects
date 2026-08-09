/*
===> About Package.json
    -> It is usually present in the project root.
    -> Package.json contains meta-data of the project
    -> Contains list of dependencies
        -> Dev dependencies 
            -> used only for development
        -> Production dependencies
            -> used for production and can installed by npm install on production
    -> To initialize any project you can use any of below commands:
        "npm init"
        "npm init --yes"
        "npm -y"

    ->  npm install {package_name} --save ==> 
    ->  npm i -S {package_name}
    ->  npm install {package_name} --save-dev
    ->  npm i -D {package_name}
*/
/*
==> Scripts in package.json
    -> Scripts that can be executed or triggered before or after another scripts

        {
            "scripts":{
                "pretest":"scripts/pretest.js"
                "test":"scripts/test.js",
                "posttest":"scripts/posttest.js"
            }
        }
        -> In this case you can execute the script by running either of these commands: 
            npm run-script test
            npm run test
            npm test
            npm t
        Note: if you run any above commands then pre and post script will execute according to need.

    ==> User-defined scripts:
        {
            "scripts":{
                "preci":"scripts/preci.js",
                "ci":"scripts/ci.js",
                "postci":"scripts/postci.js"
            }
        }
    -> you can run script by below commands:
        -> npm run-script ci
        -> npm run ci
    -> if you write any script with pre and post then pre will definitely run before that given 
       script and post also will run after the script.
*/

/*
    ==> Dependencies: 
        -> "dependencies": {"module-name":"0.1.0"}
        -> exact: 0.1.0 ==> (it will install specific version of the module)
        -> newest minor version: ^0.1.0 ==> it will install newest minor version like 0.2.0 , 0.1.6
           but cannot install major version like 2.0.0
        -> newest patch: 0.1.x or ~0.1.0 ==> will install newest minor patch like 0.1.3 but cannot 
           install higher version like 0.2.0 or 2.0.0

        -> wildcard: * ==> will install the latest version of the module.

*/

console.log("Hello World")