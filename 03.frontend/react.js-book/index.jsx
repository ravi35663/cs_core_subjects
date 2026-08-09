/*
=> Basic Rules for Writing Clean Code in react:
    -   Follow the DRY principle: do not repeat the same code.
    -   Break large files into smaller files, each handling one responsibility.
    -   Keep all CSS files in a common folder.
    -   Avoid inline CSS; create a CSS class when there are more than two style 
        rules.
    -   Use a linter and follow strict lint rules for clean and consistent code.
    -   Always review your code before raising a pull request.
    -   Split logic into small functions, each doing only one job.
    -   Create utility files to reuse common logic and avoid duplication.
    -   Keep API or service calls in separate files; for large projects, split 
        them into multiple service files (e.g., module_name.service.js).
    -   Name files clearly based on what they do.
    -   Write self-explanatory code using meaningful variable and function names; 
        use comments only for complex logic.
    -   Always write test cases and keep test files in sync with the code.
    -   Destructure props and function parameters to improve readability and 
        maintenance.
            Example: async function authenticate({ user_id, token }) {}
    -   Use useReducer instead of useState when state logic becomes complex.
    -   Organize imports in a clear order with empty lines between groups:
            1. React imports
            2. Library imports (alphabetical)
            3. Absolute project imports (alphabetical)
            4. Relative imports (alphabetical)
            5. import * as ...
            6. Side-effect imports (e.g., './file.css')
    -   Use index.js in folders to re-export files and avoid long import paths.
    -   Name React components using PascalCase.
    -   Name helper files and folders using camelCase.
    -   Name CSS files the same as the component (PascalCase); keep global styles 
        in global.css using camelCase.
*/
