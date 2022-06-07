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
