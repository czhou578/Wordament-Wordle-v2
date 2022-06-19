- Module has no exported member error in Typescript

  - export const \_\_\_ = ????, then import using brackets, if not default export

- ts node is not recognized
- install ts-node globally (not ideal....)

- cannot use import statement outside of a module

  - tsconfig.json, add "module": "CommonJs"

- Unknonw file extension ".ts"

  - remove "type": "module"

- Dotenv, zero-dependency module that loads environment variables from a .env file into process.env

- typescript emitted no output

  - change "noEmit" to false in tsconfig.json

- Cannot write file because it would overwrite input file in TS

  - specify an outDir to build folder name, and exclude the outDir in the build process in tsconfig.json

- ncu, short for npm-check-update, which you have to install separately.

  - ncu -u to update all the dependencies in package.json

- must have all the proper scripts set up in package.json before adding new ones in .yml file.

- webpack cannot resolve URI error (with favicon.ico and manifest.json)

  - just make sure the file paths in dist folder and the regular index.html are the same for both files.

- The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

- the req body data obj has to have the same name as its defined in users.ts
