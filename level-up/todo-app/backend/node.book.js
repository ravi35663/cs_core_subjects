/* 
=>  Dependencies vs DevDependencies:
    -   Dependencies (dependencies in package.json) are packages your application 
        needs to run properly in production (the environment where your actual 
        users interact with your application). In our case, Express.js is one 
        such example of a dependency.

    -   DevDependencies (devDependencies in package.json) are packages you only 
        need during development, that is, when building your application. This 
        includes testing frameworks, build tools, and code formatters, such as 
        TypeScript, ESLint and Prettier. These packages are only used to help 
        facilitate the development process, but aren’t part of the final 
        product that is shipped to users.
    
    -   With this mind, we may now proceed to install these tools in our project.
            npm i -D typescript @types/node @types/express @tsconfig/node22

        - The -D flag indicates that these packages are only used as devDependencies.

    -   Packages that begin with @types/... are type definitions which come from 
        “DefinitelyTyped”, a large repository maintained by the TypeScript community 
        that provides type information for thousands of JavaScript libraries, such as 
        Express.js, which, for example, uses “Request” and “Response” types, which we 
        will use later.
*/ 
/*
=> Running package.json scripts:
-   The scripts section in package.json serves as a command center for your Node.js 
    project.
    "scripts": {
        "dev": "tsx --watch src/index.ts",
        "start": "node dist/index.js",
        "build": "tsc",
        "type-check": "tsc --noEmit",
        "lint": "eslint .",
        "lint:fix": "eslint --fix .",
        "format": "prettier --write .",
        "format:check": "prettier --check .",
        "test": "echo \"Error: no test specified\" && exit 1",
    }

    -   npm run dev : runs the index.ts file without typechecking and automatically 
        restarts the Node.js server whenever a file is saved, which allows for quick 
        iterations while working on a project.

    -   npm run start: runs the compiled JavaScript files (that is, the same files that 
        would run in your production environment).

    -   npm run build : runs the TypeScript typechecker and outputs the compiled 
        JavaScript files.

    -   npm run type-check: runs the TypeScript typechecker, without any file output.

    -   npm run lint: runs ESLint throughout all your files and shows which files have 
        yet to be linted.

    -   npm run lint:fix: runs ESLint throughout all your files and applies automatic 
        linting whenever possible.

    -   npm run format: runs Prettier throughout all your files and applies formatting.

    -   npm run format:check: runs Prettier throughout all your files and shows which 
        files have yet to be formatted.

    -   npm run test: runs tests on the project, which we won’t cover in this tutorial, 
        but are typically implemented with the jest package.
*/

/*
=>  Prettier Installation:
    npm i -D prettier:
        Prettier rules can be modified with a '.prettrierrc' configuration file.
    
    You may, for example, change the default printWidth property from 80 to 150.
*/

/*
=> Why do we use .sequelizerc and this path config?:
    Problem Without .sequelizerc:
        By default, when you run: npx sequelize-cli migration:generate --name create-user
        Sequelize CLI assumes this structure:
            project/
            ├── models/
            ├── migrations/
            ├── seeders/
            └── config/config.js

        But in our enterprise setup, we moved everything to::
            src/infrastructure/database/
        So now Sequelize CLI doesn’t know where your folders are. So it will create:
            - Create migrations in wrong location
            - Fail to find config
            - Break your structure

=> What .sequelizerc Does:
    .sequelizerc tells Sequelize CLI:
    “Hey, don’t use default folders. Use MY custom enterprise structure.”
    - Why We Use path.resolve(): path.resolve("src/infrastructure/database/migrations")
        Because:
            It converts relative path → absolute path
            Works cross-platform (Windows, Mac, Linux)
            Avoids path errors
    
Note:
    .sequelizerc tells Sequelize CLI to use your custom enterprise folder 
    structure instead of default one.
*/
