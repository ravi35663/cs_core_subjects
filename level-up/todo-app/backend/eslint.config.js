// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import perfectionist from "eslint-plugin-perfectionist";

/*
The typescript-eslint package does provide a set of stricter rules, which I recommend 
you apply. The perfectionist package provides rules for the order of imports and items.
*/
export default tseslint.config(
  {
    ignores: ["**/*.js"],
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  perfectionist.configs["recommended-natural"],
);

// overrides: [
//   {
//     files: ["*.cjs"],
//     parserOptions: {
//       project: null
//     }
//   }
// ]